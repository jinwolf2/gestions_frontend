"use client";

import { useState } from "react";
import Link from "next/link";
import { IoCubeOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-2 z-50">
          <IoCubeOutline className="text-xl" />
          <span className="font-bold tracking-tighter text-lg">GESTIONS</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-1 text-xs font-mono text-gray-500">
          <Link 
            href="#form-section" 
            className="hover:text-g-black hover:underline mr-4 transition-all"
          >
            INICIAR PROYECTO
          </Link>
          <span className="px-2 py-1 bg-gray-100 rounded cursor-default">
            MARZO 2026
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded text-blue-600 cursor-default">
            TALLINN.EE
          </span>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none z-50 p-2 text-g-black"
          aria-label="Toggle menu"
        >
          {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>
      </div>

      {/* MOBILE MENU CONTAINER */}
      {/* Usamos clsx para alternar clases de visibilidad y posición */}
      <div
        className={twMerge(
          "absolute top-16 left-0 w-full bg-white border-b border-gray-200 p-6 flex flex-col gap-4 shadow-xl md:hidden font-mono text-sm transition-all duration-300 ease-in-out z-40 origin-top",
          isOpen ? "opacity-100 scale-y-100 translate-y-0 visible" : "opacity-0 scale-y-0 -translate-y-5 invisible"
        )}
      >
        <Link 
          href="#form-section" 
          className="block py-2 border-b border-gray-100 hover:text-g-black"
          onClick={() => setIsOpen(false)}
        >
          INICIAR PROYECTO
        </Link>
        
        <div className="flex gap-2 mt-2">
          <span className="px-2 py-1 bg-gray-100 rounded text-xs">
            EST. 2024
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded text-xs text-blue-600">
            TALLINN.EE
          </span>
        </div>
      </div>
    </nav>
  );
}