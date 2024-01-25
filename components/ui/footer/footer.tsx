"use client";

import Image from "next/image";
import { Footer as PolUiFooter } from "pol-ui";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const bgImage = "/media/textures/fons.jpg";
const ParallaxComponent = () => {
  return (
    <ParallaxBanner
      style={{
        height: 800,
      }}
    >
      <ParallaxBannerLayer
        expanded={false}
        speed={-40}
        // scale={[1, 1.2]}
        opacity={[0.9, 1]}
      >
        <Image
          src={bgImage}
          alt="Picture of the author"
          className="w-full h-full object-cover bg-bottom bg-origin-border bg-no-repeat bg-cover"
          width={1000}
          height={800}
        />
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};
const Footer = () => {
  return (
    <section className="w-full relative text-center bg-red-200 pb-[500px]">
      <div>
        <h3>Reviews</h3>
        <p>Read what our customers are saying</p>
        <ul>
          <li>Review 1</li>
          <li>Review 2</li>
          <li>Review 3</li>
        </ul>
      </div>
      {/* <ParallaxComponent /> */}

      <div className="my-20 mb-40"> footer blahblabh</div>
    </section>
  );
};
export default Footer;
