export { default } from "next-auth/middleware";

// TODO remove withAuth

export const config = {
  matcher: ["/profile", "/admin/:path*"],
};
