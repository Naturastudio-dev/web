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
    <div className="bg-gradient-to-t from-60% from-primary w-full">
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="cursor-grab ">
          {reviews.map((review, i) => {
            return (
              <CarouselItem
                key={i}
                className="max-w-[90vw] md:max-w-[70vw] xl:max-w-[50vw] mx-auto"
              >
                <div className="bg-primary-200  h-full rounded-3xl p-4 pt-6 justify-between flex flex-col items-stretch hadow-xl">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-center gap-3 items-center">
                      <p className="text-lg font-bold">{review.name}</p>
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
                  <footer className="flex justify-end">
                    <Button
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-100 text-primary-800"
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
