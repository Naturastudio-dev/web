"use client";

import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";
import { TbStarFilled } from "react-icons/tb";
import { Button } from "pol-ui";

const ReviewsCarrousel = () => {
  interface Review {
    name: string;
    stars: number;
    review: string;
    avatar: string;
    href: string;
  }
  const reviews: Review[] = [
    {
      name: "Meritxell Durlan López",
      stars: 5,
      review:
        "Hem fet una sessió de fotos familiars i l’experiència ha estat fantàstica! El tracte ha estat fabulós, des del minut 1 ens ha donat molta confiança i ens ha fet sentir molt còmodes...",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjXacRXSaGUE-APYKZ5ZEZpSlzIuQyjCwphTt8dZYTSmqg=w60-h60-p-rp-mo-br100",
      href: "https://maps.app.goo.gl/1DeScViyVoWRPrjTA",
    },
    {
      name: "Estel Turon",
      stars: 5,
      review:
        "Experiència totalment recomanable, amb ganes de tornar-ho a repetir. Molt detallista i professional. M'he sentit molt a gust!",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjVw2xNUK0b2asu0Vv39n3h3Dq3bU3REKSrLSJCJV1M0UTo=w60-h60-p-rp-mo-br100",
      href: "https://maps.app.goo.gl/RC5L3RydCgxUrgzGA",
    },
    {
      name: "Iratxe Niembro Garcia",
      stars: 5,
      review:
        "La calidad y edición de las fotos es muy buena! Y el trato excelente, muy profesional, perfeccionista y detallista!✨",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjXLJdBYXypFglq4l39ns4Z6rJ4iYHugmUuTAENKodVZnX3a=w60-h60-p-rp-mo-br100",
      href: "https://maps.app.goo.gl/PtuZbULtcKJke14aA",
    },
    {
      name: "Oriol Montero",
      stars: 5,
      review:
        "Gran professional i molt bones fotografies! M'ha encantat el tracte personal i el resultat.",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjV71u90CllJgs0CRh3WbdG_5R5cslQ-IEW1oM8Px7W1GCk=w60-h60-p-rp-mo-br100",
      href: "https://maps.app.goo.gl/AJoTJCEqB44nkp24A",
    },
    {
      name: "Júlia Duran Heredia",
      stars: 5,
      review:
        "Ha sigut fantàstic! Molt professional i i les fotos han quedat xulíssimes!!😍 …",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjUOWMrSC3MY5vYOSBWieWfwiSIbCl3FHYvsBe4PgUciwQ=w60-h60-p-rp-mo-br100",
      href: "https://maps.app.goo.gl/EYBnhnUQBiZZQLus6",
    },
  ];

  return (
    <div className="bg-gradient-to-t from-60% from-primary w-full">
      <Carousel
        plugins={[
          Autoplay({
            delay: 8000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="cursor-grab	">
          {reviews.map((review, i) => {
            const randomTexture = Math.floor(Math.random() * 5);
            return (
              <CarouselItem
                key={i}
                className="lg:basis-1/2 p-16 max-w-[90vw] mx-auto"
              >
                <div
                  className="bg-primary-200 h-full rounded-3xl p-8 justify-between flex flex-col items-stretch bg-center bg-no-repeat bg-cover shadow-xl bg-blend-multiply "
                  style={{
                    backgroundImage: `url(/media/textures/${randomTexture}.jpg)`,
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <header className="flex gap-4 items-center">
                      <Image
                        src={review.avatar}
                        width={60}
                        height={60}
                        className="w-[60px] h-[60px] object-cover rounded-3xl aspect-square"
                        alt="example image"
                      />
                      <div className="flex flex-col">
                        <p className="text-lg font-bold">{review.name}</p>
                        <div className="flex gap-1 bg-primary/30 rounded-full p-1 w-fit">
                          {Array(review.stars)
                            .fill(0)
                            .map((_, i) => (
                              <span key={i} className="text-yellow-400">
                                <TbStarFilled />
                              </span>
                            ))}
                        </div>
                      </div>
                    </header>

                    <p className="text-dark text-lg px-8 py-4 text-balance">
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
      </Carousel>
    </div>
  );
};

export default ReviewsCarrousel;
