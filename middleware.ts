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
  ],
  ignoredRoutes: ["/no-auth-in-this-route"],
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.

    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)",
  ],
};
