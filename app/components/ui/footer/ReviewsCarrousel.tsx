"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/app/components/ui/carousel";
import { reviews } from "@/data/reviews";
import Link from "next/link";
import { TbStarFilled } from "react-icons/tb";

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
                className="max-w-[70vw] md:max-w-[50vw] xl:max-w-[30vw]"
              >
                <Link key={i} href={review.href} target="_blank" rel="noopener noreferrer">
                  <div className="bg-primary-100/60 hover:bg-primary-100 transition-all cursor-pointer h-full rounded-3xl p-5 py-10 justify-center flex flex-col items-stretch group">
                    <div className="flex flex-col gap-2 items-center justify-center">
                      <strong className="text-xl md:text-2xl">{review.name}</strong>
                      <div className="flex gap-1 rounded-full p-1 w-fit justify-center">
                        {Array(review.stars)
                          .fill(0)
                          .map((_, i) => (
                            <span key={i} className="text-yellow-800">
                              <TbStarFilled />
                            </span>
                          ))}
                      </div>

                      <p className="text-dark text-lg py-2 md:py-4 text-balance">
                        {review.review}
                      </p>
                    </div>

                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ReviewsCarrousel;
