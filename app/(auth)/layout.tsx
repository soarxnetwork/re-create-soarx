import type { Metadata } from "next";
import { Logo } from "./_components/Logo";

export const metadata: Metadata = {
  title: "Auth MugiChan",
  description: "Auth Page Mugichawn",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col items-center justify-center mt-8 gap-4">
      <Logo />
      {children}
    </div>
  );
}
