"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { TbStarFilled } from "react-icons/tb";
import { Button } from "pol-ui";
import { reviews } from "@/data/reviews";

const ReviewsCarrousel = () => {
  return (
    <div className="bg-gradient-to-t from-60% from-primary w-full relative">
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="cursor-grab relative">
          {reviews.map((review, i) => {
            return (
              <CarouselItem
                key={i}
                className="max-w-[90vw] md:max-w-[70vw] xl:max-w-[50vw] mx-auto"
              >
                <div className="bg-primary-200  h-full rounded-3xl p-6 justify-center flex flex-col items-stretch group">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-center gap-3 items-center">
                      <h5 className="text-xl md:text-3xl">{review.name}</h5>
                      <div className="flex gap-1 bg-primary/30 rounded-full p-1 w-fit justify-center">
                        {Array(review.stars)
                          .fill(0)
                          .map((_, i) => (
                            <span key={i} className="text-yellow-400">
                              <TbStarFilled />
                            </span>
                          ))}
                      </div>
                    </div>

                    <p className="text-dark text-lg py-2 md:py-4 text-balance">
                      {review.review}
                    </p>
                  </div>
                  <footer className="flex justify-center ">
                    <Button
                      outline
                      target="_blank"
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                      rel="noopener noreferrer"
                      // className="bg-primary-100 text-primary-800"
                      href={review.href}
                    >
                      Ver más
                    </Button>
                  </footer>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ReviewsCarrousel;
