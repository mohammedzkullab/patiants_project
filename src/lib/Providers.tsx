"use client";
import { ThemeProvider } from "@/components/ThemeProvider";
import React from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" forcedTheme="dark" enableColorScheme>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
