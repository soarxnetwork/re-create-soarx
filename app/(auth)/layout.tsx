import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SoarX",
  description: "SoarX",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div >
      {children}
    </div>
  );
}
