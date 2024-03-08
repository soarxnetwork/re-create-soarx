import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseURL = "https://www.soarx.tech";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin*", "/admin/*"],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
