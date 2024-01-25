"use client";
import { Routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
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

  const links = [
    {
      name: "Inicio",
      href: Routes.inicio,
    },
    {
      name: "Sesiones",
      href: Routes.sesiones,
    },
    {
      name: "Diseño",
      href: Routes.portfolio,
    },
    {
      name: "Sobre mi",
      href: Routes.sobreMi,
    },
    {
      name: "Contacto",
      href: Routes.contacto,
    },
  ];
  const navDividedInHalf = links.length / 2;

  const [firstHalf, secondHalf] = [
    links.slice(0, navDividedInHalf),
    links.slice(navDividedInHalf, links.length),
  ];

  const NavLink = ({
    href,
    children,
    isActive,
  }: {
    href: string;
    children: React.ReactNode;
    isActive: boolean;
  }) => {
    return (
      <motion.li key={href} className="relative">
        <Link
          href={href}
          className={`${
            isActive ? "text-light" : "text-light/80"
          } hover:text-primary-300`}
        >
          {children}
        </Link>
        {isActive ? (
          <motion.div
            className="absolute -bottom-2 left-0 h-1 bg-light w-full p-1  rounded-full"
            layoutId="underline"
          />
        ) : null}
      </motion.li>
    );
  };

  return (
    <nav
      className={`flex flex-w w-full font-hand uppercase text-light  items-center `}
    >
      <ul className="hidden sm:flex items-center w-full justify-around md:justify-center md:gap-10 lg:text-xl flex-1">
        {firstHalf.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            isActive={isActive(link.href)}
          >
            {link.name}
          </NavLink>
        ))}

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
        {secondHalf.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            isActive={isActive(link.href)}
          >
            {link.name}
          </NavLink>
        ))}
      </ul>

      <li className="flex sm:hidden w-full justify-center">
        <Link
          href={Routes.inicio}
          className="min-w-[100px] text-center justify-center flex flex-1"
        >
          <Image
            alt="Naturastudio logo"
            src="/logos/logo-blanc.svg"
            width={100}
            height={50}
            className="w-full h-auto max-w-[100px] "
          />
        </Link>
      </li>
    </nav>
  );
};

export default NavBar;
