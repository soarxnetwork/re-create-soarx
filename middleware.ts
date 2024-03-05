import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/events",
    "/api/event",
    "/api/webhooks/clerk",
    "/api/user",
    "/api/externalUser",
    "/about",
    "/events",
    "/event(.*)",
    "/admin(.*)",
    "/api/trpc(.*)",
    "/api/uploadthing(.*)",
  ],
  ignoredRoutes: ["/no-auth-in-this-route"],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
