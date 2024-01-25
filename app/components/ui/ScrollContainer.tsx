"use client";

import * as React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const ScrollContainer = (
  props: Readonly<{
    children: React.ReactNode;
  }>
) => {
  const [scrollEl, setScrollElement] = React.useState<HTMLDivElement | null>(
    null
  );
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (ref.current) {
      setScrollElement(ref.current);
    }
  }, []);

  return (
    <div className=" border border-red" ref={ref}>
      <ParallaxProvider scrollContainer={scrollEl || undefined}>
        {props.children}
      </ParallaxProvider>
    </div>
  );
};

export default ScrollContainer;
