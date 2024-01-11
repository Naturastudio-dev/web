import { Routes } from "@/constants/routes";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav
      className={`flex flex-w w-full   uppercase text-light h-20 items-center `}
    >
      <ul className="hidden sm:flex  w-full justify-around md:justify-center md:gap-10 lg:text-lg flex-1">
        <li>
          <Link href={Routes.inicio}>Inicio</Link>
        </li>
        <li>
          <Link href={Routes.sesiones}>Sesiones</Link>
        </li>
        <li>
          <Link href={Routes.portfolio}>Portfolio</Link>
        </li>
        <li>
          <Link
            href={Routes.inicio}
            className="min-w-[100px] text-center justify-center flex flex-1"
          >
            LOGO
          </Link>
        </li>
        <li>
          <Link href={Routes.valesRegalo}>Vales de regalo</Link>
        </li>
        <li>
          <Link href={Routes.sobreMi}>Sobre mi</Link>
        </li>
        <li>
          <Link href={Routes.contacto}>Contacto</Link>
        </li>
      </ul>

      <li className="flex sm:hidden w-full justify-center">
        <Link
          href={Routes.inicio}
          className="min-w-[100px] text-center justify-center flex flex-1"
        >
          LOGO
        </Link>
      </li>
    </nav>
  );
};

export default NavBar;
