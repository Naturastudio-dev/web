"use client";

import { PoluiProvider } from "pol-ui";
import { ParallaxProvider } from "react-scroll-parallax";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <PoluiProvider>
      <ParallaxProvider>
        <div className="bg-light min-h-screen dark:bg-dark text-dark dark:text-light">
          {children}
        </div>
      </ParallaxProvider>
    </PoluiProvider>
  );
}
