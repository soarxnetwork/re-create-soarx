import { ClerkProvider } from "@clerk/nextjs";
import { PrimeReactProvider } from "primereact/api";
import { Analytics } from "@vercel/analytics/react";

import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ClerkProvider>
      <PrimeReactProvider>
        {children}
        <Analytics />
      </PrimeReactProvider>
    </ClerkProvider>
  );
};

export default Providers;
