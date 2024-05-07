import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/Providers";
import "@uploadthing/react/styles.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import Link from "next/link";
import ButtonAuth from "@/components/ButtonAuth";
import { NextProvider } from "@/providers/NextuiProviders";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/next-auth";

export const metadata: Metadata = {
  title: "SoarX",
  description: "SoarX is a nationwide community dedicated to empowering students through impactful events, sessions, and hackathons.",
  metadataBase: new URL("https://www.soarx.tech/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {" "}
      <body>
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <NextProvider

        >
          <Providers>{children}</Providers>
        </NextProvider>
      </body>
    </html>
  );
}
