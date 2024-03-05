import { ClerkProvider } from "@clerk/nextjs";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ClerkProvider>
      <PrimeReactProvider>{children}</PrimeReactProvider>
    </ClerkProvider>
  );
};

export default Providers;
