"use client";

import Image from "next/image";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import ReviewsCarrousel from "./ReviewsCarrousel";

const bgImage = "/media/textures/fons_retallat.jpg";
const ParallaxComponent = () => {
  return (
    <ParallaxBanner
      style={{
        height: 900,
      }}
    >
      <ParallaxBannerLayer speed={40}>
        <div
          // style="background-image: url(/media/textures/fons.jpg)"
          style={{ backgroundImage: `url(${bgImage})` }}
          className="w-full h-full bg-center bg-no-repeat bg-cover overflow-hidden"
        ></div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <section className="w-full relative text-center ">
      <header className="flex flex-col gap-1 justify-center px-8 ">
        <h3 className="text-4xl md:text-5xl text-white pt-10">Reviews</h3>
        <p className="text-center text-light text-xl pb-6  ">
          Estas son algunas de las reseñas que han dejado mis clientes.
        </p>
      </header>

      <ReviewsCarrousel />
      <div className="relative">
        <ParallaxComponent />
        <div className="absolute bottom-0 left-0 inset-0 bg-gradient-to-t to-30% from-[#050401] w-full h-full z-10" />
        <div className="absolute top-0 left-0 inset-0 bg-gradient-to-b to-50% from-primary w-full h-full z-10  " />
      </div>
      <div className=" bg-[#050401] pb-[500px] text-white">
        <div className="flex flex-col gap-1 justify-center items-center">
          <Image
            alt="Naturastudio logo"
            src="/logos/logo-blanc.svg"
            width={300}
            height={180}
            className="w-full h-auto max-w-[300px] "
          />
          <ul className="flex gap-2 items-center ">
            <li>©Naturastudio, {thisYear}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Footer;
