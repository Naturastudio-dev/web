"use client";
import { Routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const NavBar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (pathname === Routes.inicio && href === Routes.inicio) {
      return true;
    }
    if (pathname.includes(href)) {
      return true;
    }
    return false;
  };
  const sign = `

   ____          _          _ ____        ____       _ 
  / ___|___   __| | ___  __| | __ ) _   _|  _ \\ ___ | |
 | |   / _ \\ / _' |/ _ \\/ _' |  _ \\| | | | |_) / _ \\| |
 | |__| (_) | (_| |  __/ (_| | |_) | |_| |  __/ (_) | |
  \\____\\___/ \\__,_|\\___|\\__,_|____/ \\__, |_|   \\___/|_|
                                    |___/              

`;
  console.log(sign);
  console.log(`
Hi there! 👋
This website has been made by @polgubau, and it's open source!

More info at https://polgubau.com

_____________________________________________________
`);

  return (
    <nav
      className={`flex flex-w w-full font-hand uppercase text-light  items-center `}
    >
      <ul className="hidden sm:flex items-center w-full justify-around md:justify-center md:gap-10 lg:text-xl flex-1">
        <li>
          <Link
            href={Routes.inicio}
            className={`${
              isActive(Routes.inicio)
                ? "  bg-primary-300 p- rounded-full p-2"
                : ""
            } `}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href={Routes.sesiones}
            className={`${isActive(Routes.sesiones) ? "font-bold" : ""} `}
          >
            Sesiones
          </Link>
        </li>
        <li>
          <Link
            href={Routes.portfolio}
            className={`${isActive(Routes.portfolio) ? "font-bold" : ""} `}
          >
            Diseño
          </Link>
        </li>
        <li>
          <Link
            href={Routes.inicio}
            className="max-w-[200px] w-full text-center justify-center flex flex-1 overflow-hidden"
          >
            <Image
              src="/logos/logo-blanc.svg"
              className="h-fit w-full object-cover"
              width={150}
              height={50}
              alt="Logo de Naturastudio"
            />
          </Link>
        </li>
        {/* <li>
          <Link
            href={Routes.valesRegalo}
            className={`${isActive(Routes.valesRegalo) ? "font-bold" : ""} `}
          >
            Vales de regalo
          </Link>
        </li> */}
        <li>
          <Link
            href={Routes.sobreMi}
            className={`${isActive(Routes.sobreMi) ? "font-bold" : ""} `}
          >
            Sobre mi
          </Link>
        </li>
        <li>
          <Link
            href={Routes.contacto}
            className={`${isActive(Routes.contacto) ? "font-bold" : ""} `}
          >
            Contacto
          </Link>
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
