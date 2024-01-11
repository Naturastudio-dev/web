"use client";

import { Button } from "pol-ui";
import React from "react";

export const vales = [
  {
    id: 1,
    title: "Sesión de fotos",
    description: "Sesión de fotos de 1 hora",
    image: "/media/sessions/familiar/1.jpg",
  },
  {
    id: 2,
    title: "Reportaje de boda",
    description: "Reportaje de boda de 4 horas",
    image: "/media/sessions/familiar/2.jpg",
  },
];

const ValesRegaloPage = () => {
  return (
    <div className="flex flex-col gap-8 py-6">
      <h1 className="text-neutral text-3xl text-center">Vales de regalo</h1>

      <ul className="flex flex-col gap-8">
        {vales.map((vale) => {
          return (
            <li key={vale.id} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="w-96 h-56 m-auto bg-gradient-to-r from-secondary to-neutral rounded-xl relative text-white shadow-2xl transition-transform transform"
                style={{
                  backgroundImage: `url(${vale.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="w-full px-4 absolute top-4">
                  <div className="bg-gradient-to-r from-secondary to-secondary/50 py-1 px-3 rounded-lg">
                    <p className="font-semibold text-lg ">{vale.title}</p>
                    <p>{vale.description}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-center md:text-start">
                <span className="text-neutral text-3xl">{vale.title}</span>
                <span className="text-neutral/70">{vale.description}</span>

                <Button className=" self-center md:self-start">Comprar</Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ValesRegaloPage;
