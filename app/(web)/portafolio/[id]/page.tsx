import Footer from "@/app/components/ui/footer/footer";
import { Project, projects } from "@/data/projects";
import Image from "next/image";
import React from "react";
import { Routes } from "@/constants/routes";
import { TbArrowLeft } from "react-icons/tb";

const DesignPage = ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const projectFound = projects.find((project) => project.id === id);

  if (!projectFound) return <div>Project not found</div>;

  const projectSelected: Project = projectFound;
  const otherImages = projectSelected.images.slice(1);
  return (
    <main className="flex flex-col gap-2 justify-center text-center w-full items-center">
      <header className="w-full flex max-w-4xl">
        <a
          href={Routes.portfolio}
          className="hover:bg-light/30 flex items-center gap-2 p-2 rounded-full text-sm text-light transition-all"
        >
          <TbArrowLeft /> Volver
        </a>
      </header>
      <section className="flex flex-col justify-center text-center w-full max-w-4xl">
        <h1 className="text-4xl md:text-6xl text-light">
          {projectSelected.title}
        </h1>
        <p className="text-2xl md:text-2xl text-primary-200 mb-8">
          {projectSelected.description}
        </p>
        <div className="flex flex-col rounded-3xl overflow-hidden bg-primary-100">
          <Image
            alt={`Imagen de portada de ${projectSelected.title}`}
            src={`/portafolio/${projectSelected.id}/${projectSelected.images[0]}`}
            width={500}
            className="w-full rounded-t-3xl"
            height={500}
          />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {otherImages.map((image) => (
              <Image
                key={image}
                alt={`Imagen de portada de ${projectSelected.title}`}
                src={`/portafolio/${projectSelected.id}/${image}`}
                width={500}
                className="flex flex-1 object-cover h-[300px] bg-light"
                height={300}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DesignPage;
