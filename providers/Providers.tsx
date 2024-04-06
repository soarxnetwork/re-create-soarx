"use client"
// import { ClerkProvider } from "@clerk/nextjs";
import { PrimeReactProvider } from "primereact/api";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";

import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    // <ClerkProvider>
    <SessionProvider>
      <PrimeReactProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {children}
        <Analytics />
      </PrimeReactProvider>
    </SessionProvider>
    // </ClerkProvider>
  );
};

export default Providers;
