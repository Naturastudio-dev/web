import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Session {
  cover: string;
  title: string; // winkle
  contains: string[];
  price: string;
  startingDate?: Date;
  endingDate?: Date;
}

const sesiones: Session[] = [
  {
    cover: "/media/packs/pack-boda.png",
    title: "Pack Boda",
    contains: ["200 fotos", "2 horas", "20 ediciones"],

    price: "000€",
  },
  {
    cover: "/media/packs/pack-comunion.png",
    title: "Pack Comunión",
    contains: ["20 fotos", "1 hora", "10 ediciones"],
    price: "000€",
  },
  {
    cover: "/media/packs/pack-embarazo.png",
    title: "Pack Embarazo",
    contains: ["45 fotos", "Sitio a elegir", "20 ediciones"],
    price: "000€",
  },
  {
    cover: "/media/packs/pack-familiar.png",
    title: "Pack familiar",
    contains: ["45 fotos", "Sitio a elegir", "20 ediciones"],
    price: "000€",
  },
  {
    cover: "/media/packs/pack-navidad.png",
    title: "Pack navidad",
    contains: ["45 fotos", "Sitio a elegir", "20 ediciones"],
    price: "000€",
    startingDate: new Date(2021, 11, 1),
    endingDate: new Date(2021, 11, 31),
  },
  {
    cover: "/media/packs/pack-recien-nacido.png",
    title: "Pack recien_nacido",
    contains: ["45 fotos", "Sitio a elegir", "20 ediciones"],
    price: "000€",
  },
  {
    cover: "/media/packs/pack-pareja.png",
    title: "Pack Pareja",
    contains: [
      "45 fotos",
      "Sitio a elegir",
      "20 ediciones",
      "Un regalo especial",
      "Posibilidad de añadir un vídeo",
    ],
    price: "000€",
  },
  {
    cover: "/media/packs/pack-infantil.png",
    title: "Pack Infantil",
    contains: ["45 fotos", "Sitio a elegir", "20 ediciones"],
    price: "000€",
  },
];

const ctaLabels = [
  "¡Lo quiero!",
  "¡A por él!",
  "Contratar",
  "Me interesa",
  "¡Quiero más!",
  "Es para mí",
  "Wow, quiero",
  "Reservar",
  "Pedir",
];

const SesionesPage = () => {
  return (
    <div className="flex flex-col w-full text-center items-center">
      <h1 className="text-secondary-50 text-center text-4xl md:text-7xl justify-center items-center w-full font-hand mb-10">
        Pack sesiones
      </h1>
      <ul className="flex gap-8 md:gap-6 flex-col w-full">
        {sesiones.map((s, k) => {
          const ctaLabel = ctaLabels[k % ctaLabels.length];
          const isOdd = k % 2 === 0;

          return (
            <li
              key={s.title}
              className={cn(
                "flex flex-col gap-4 py-6 w-full justify-center",
                isOdd ? "md:flex-row" : "md:flex-row-reverse",
                isOdd ? "bg-red-200" : ""
              )}
            >
              <Image
                src={s.cover}
                alt={s.title}
                width={400}
                height={500}
                className="h-auto border border-red-600 border-dotted object-contain "
              />
              <div
                className="flex flex-col gap-2 relative p-8"
                style={{
                  backgroundImage: "url('/media/packs/llibreta-packs.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="px-8 font-hand flex flex-col justify-between h-full text-normal ">
                  <h2 className="text-4xl font-hand text-lime-900">
                    {s.title}
                  </h2>
                  <ul className="flex flex-col items-center justify-center gap-2 text-xl">
                    {s.contains.map((c, k) => (
                      <li key={k}>{c}</li>
                    ))}
                  </ul>
                  <p className="text-3xl">{s.price}</p>

                  <Link
                    href="/contacto"
                    className="text-lime-800 rotate-6 text-2xl hover:scale-105 transition-all duration-300 ease-in-out py-6"
                  >
                    {ctaLabel}
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SesionesPage;
