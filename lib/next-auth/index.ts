import { db } from "@/lib/db";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import { User } from "@prisma/client";
import { signJwt } from "@/lib/jwt";
import { compileActivationTemplate } from "../mail";
import { sendEmail } from "../utils";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  // @ts-ignore
  adapter: PrismaAdapter(db),
  allowDangerousEmailAccountLinking: true,
  pages: {
    signIn: "/sign-in",
  },
  session: {
    // ! session in nextauth will be stored in the cookie (http only)
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      idToken: true,
      authorization: {
        params: {
          scope: "openid profile email",
        },
      },

      async profile(profile) {
        return {
          id: profile.sub,
          username: `${profile.given_name} ${
            profile.family_name ? profile.family_name : ""
          }`,
          email: profile.email,
          image: profile.picture,
          emailVerified: new Date(),
        };
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      // ! credentials callback run whenever we sign in with credentials provider
      async authorize(credentials) {
        if (!credentials) throw new Error("No credentials provided");

        const user = await db.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if (!user) throw new Error("No user found");
        if (!credentials?.password) throw new Error("No password provided");

        const isPasswordValid = await bcrypt.compare(
          credentials?.password!,
          user.password!
        );
        if (!isPasswordValid) throw new Error("Invalid password");

        if (!user.emailVerified) {
          const jwtUserId = signJwt({
            userId: user.id,
          });
          const activationUrl = `${process.env.NEXTAUTH_URL}/activation/${jwtUserId}`;
          const body = compileActivationTemplate(user.username!, activationUrl);
          await sendEmail(user.email!,"Activate your account", body);
          throw new Error("Please check your email to activate your account");
        }

        const { password, ...rest } = user;

        return rest;
      },
    }),
  ],
  callbacks: {
    // ! jwt and session callback run whenever a user signs in or when we check session hook (useSession, or getSession, or getServerSession)

    // ! user got from all providers, user object is available when the user sign in for the first time after that whenever we use session hook  the user will be undefined, so the user object is only available when the user sign in for the first time, so we have to put the user object into the token and then we can send the token to session callback

    // ! conclusion: user object is only available when the user sign in for the first time, after that we have to put the user object into the token, and then we can send the token to session callback, session callback will run whenever we use session hook
    signIn: async ({ user, account }) => {
      if (account?.provider !== "credentials") return true;

      if (!user) throw new Error("No user found");

      const existingUser = await db.user.findUnique({
        where: {
          id: user.id,
        },
      });
      if (!existingUser) throw new Error("No user found");
      if (!existingUser.emailVerified) return false;

      return true;
    },
    jwt: async ({ token, user, trigger, session }) => {
      if (user) token.user = user as unknown as User;
      if (trigger === "update" && session?.user) {
        // Only spread session.user if it exists and trigger is "update"
        return { ...token, user: { ...token.user, ...session.user } };
      }
      return token;
    },
    session: async ({ token, session }) => {
      if (token.user) session.user = token.user;
      // ! session callback run whenever we check session hook (useSession, or getSession, or getServerSession)
      return session;
    },
  },
};
