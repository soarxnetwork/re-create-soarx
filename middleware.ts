import { authMiddleware } from "@clerk/nextjs";

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware

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
    "/dsa",
    "/privacy",
    "/terms",
    "/refund-policy",
    "/campus-ambassador",
    "/dsa-live-classes",
    "/images/(.*)",
  ],
  ignoredRoutes: ["/no-auth-in-this-route"],
});

export const config = {
  matcher: ["/((?!_next/image|_next/static|favicon.ico).*)", "/"],
};
