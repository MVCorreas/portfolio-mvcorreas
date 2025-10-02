"use client";

import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center mb-6 text-text-primary">
      <span className=" font-light text-2xl">Maria V Correas</span>
      <ul className="hidden md:flex space-x-8">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              href={link.path}
              title={link.title}
              className="transition-colors duration-200"
            />
          </li>
        ))}
      </ul>
      <button
        className="md:hidden flex items-center px-3 py-2 border rounded border-black text-slate-600 hover:text-black hover:border-black"
        onClick={() => setNavbarOpen(!navbarOpen)}
        aria-label="Toggle menu"
      >
        {navbarOpen ? (
          <XMarkIcon className="h-10 w-10" />
        ) : (
          <Bars3Icon className="h-10 w-10" />
        )}
      </button>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
}
