"use client";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export const ParallaxImage = ({ bgImage }: { bgImage: string }) => {
  return (
    <ParallaxBanner
      style={{
        height: 900,
      }}
    >
      <ParallaxBannerLayer speed={-40}>
        <div
          // style="background-image: url(/media/textures/fons.jpg)"
          style={{ backgroundImage: `url(${bgImage})` }}
          className="w-full h-full bg-center bg-no-repeat bg-cover overflow-hidden"
        ></div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};
