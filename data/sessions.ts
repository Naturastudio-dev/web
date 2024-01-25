export interface Session {
  cover: string;
  title: string; // winkle
  contains: string[];
  price: string;
  startingDate?: Date;
  endingDate?: Date;
}

export const sesiones: Session[] = [
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
