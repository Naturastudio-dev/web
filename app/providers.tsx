"use client";

import { PoluiProvider } from "pol-ui";
import { ParallaxProvider } from "react-scroll-parallax";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <PoluiProvider>
      <ParallaxProvider>
        <div className="bg-secondary min-h-screen text-dark">
          {children}
        </div>
      </ParallaxProvider>
    </PoluiProvider>
  );
}
