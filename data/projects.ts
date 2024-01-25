export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Marina Martí Masferrer",
    description: "Sesión de foto df ds fdfsadfsa fd sad fadf dsfsdfsefa fgaesf",
    images: ["0.png", "1.png", "2.jpg"],
  },
  {
    id: "2",
    title: "Mans màgiques",
    description: "Sesión de fotos dsf ds fdf sdfsadfs df sdfadfasd df ds f",
    images: ["0.png", "1.jpg", "2.jpg"],
  },
  {
    id: "3",
    title: "Unics",
    description: "Sesión de fotos dsadasf sa ddf dsf sfgsdaf ads fdsf",
    images: ["0.jpg", "1.jpg", "2.png", "3.png", "4.jpg", "5.jpg"],
  },
  {
    id: "4",
    title: "Joaquim Fluvia",
    description: "Sesión de fotos dsf dsf sdf sdf sdf sdf sdf sdf sdf sdf",
    images: ["0.jpg", "1.jpg"],
  },
];
