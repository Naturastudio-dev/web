import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { ParallaxImage } from "./ParallaxImage";
import { projects } from "@/data/projects";

const PortafolioPage = () => {
  return (
    <ul className="w-full ">
      {projects.map((project, i) => {
        const isOdd = i % 2 === 0;
        return (
          <Link href={`/portafolio/${project.id}`} key={project.id}>
            <li
              className={twMerge(
                "flex flex-col md:flex-row items-center hover:brightness-75 transition-all cursor-pointer pb-20 md:pb-0",
                isOdd ? "bg-primary-200 md:flex-row-reverse" : "bg-primary-300"
              )}
              key={project.id}
            >
              <article
                className={twMerge(
                  "flex flex-col items-center md:w-1/2 text-center p-14",
                  isOdd
                    ? "md:items-start md:text-left"
                    : "md:items-end md:text-right"
                )}
              >
                <h2 className="text-3xl md:text-7xl mb-4">{project.title}</h2>
                <p className="text-lg md:text-3xl mb-4 text-pretty max-w-md">
                  {project.description}
                </p>
              </article>
              <div className="flex flex-col md:flex-row items-center justify-center md:w-1/2">
                <ParallaxImage
                  bgImage={`/portafolio/${project.id}/${project.images[0]}`}
                />
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default PortafolioPage;
