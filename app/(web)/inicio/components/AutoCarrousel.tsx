"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

const AutoCarrousel = () => {
  const images = [
    "/media/sessions/familiar/1.jpg",
    "/media/sessions/familiar/2.jpg",
    "/media/sessions/familiar/3.jpg",
    "/media/sessions/familiar/4.jpg",
    "/media/sessions/familiar/5.jpg",
    "/media/sessions/familiar/6.jpg",
    "/media/sessions/familiar/7.jpg",
  ];

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-4">
        {images.map((i, k) => (
          <CarouselItem key={k} className="md:basis-1/2 lg:basis-1/3 pl-4">
            <Image
              src={i}
              width={400}
              height={400}
              className="w-full h-[400px] object-cover rounded-3xl "
              alt="example image"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default AutoCarrousel;
