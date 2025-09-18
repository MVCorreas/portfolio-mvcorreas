"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

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


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-tertiary bg-opacity-90 h-20 flex items-center justify-between px-4">
      <div className="flex items-center">
        <Link href="/" className="text-2xl md:text-4xl text-text-primary font-semibold" style={{ textDecoration: 'none' }}>
          PORTFOLIO
        </Link>
      </div>
      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-8">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
      {/* Hamburger Button */}
      <button
        className="md:hidden flex items-center px-3 py-2 border rounded border-black text-slate-600 hover:text-black hover:border-black"
        onClick={() => setNavbarOpen(!navbarOpen)}
        aria-label="Toggle menu"
      >
        {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
      </button>
      {/* Mobile Overlay */}
      {navbarOpen && (
        <MenuOverlay links={navLinks} />
      )}
    </nav>
  );
};

export default Navbar;
