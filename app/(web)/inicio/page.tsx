import React from "react";
import Carousel from "./components/AutoCarrousel";
import Image from "next/image";

const HomePage = () => {
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
    <main className="flex flex-col gap-4   items-center">
      <p className="w-fit p-12 text-center max-w-[600px] my-8 text-2xl text-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Carousel visibleItemsCount={3} isInfinite>
        {images.map((i, k) => (
          <div key={k}>
            <Image
              src={i}
              width={300}
              height={300}
              className="max-w-[300px] h-[300px] object-cover w-full"
              alt="example image"
            />
          </div>
        ))}
      </Carousel>
    </main>
  );
};

export default HomePage;
