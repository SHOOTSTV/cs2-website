"use client";

import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PlayAudio } from "./PlayAudio";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.outerHeight / 1.5);
      console.log(window.outerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-center w-full mx-auto z-50 fixed left-1/2 -translate-x-1/2 px-4 md:px-0 transition-all duration-300 ${
        isScrolled ? "bg-black/30 backdrop-blur-sm " : ""
      }`}
    >
      <nav className="flex items-center container justify-between h-20">
        <Link
          href="/"
          aria-label="Home"
          className="transition-transform duration-300 hover:rotate-[20deg] hover:rotate-y-180 transform-gpu"
        >
          <Image
            src="/logo.svg"
            alt="TUK Logo"
            width={60}
            height={60}
            priority
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X /> : <AlignJustify />}
        </button>

        <ul className="hidden md:flex items-center gap-6" role="list">
          {["Projects", "Weapons", "About"].map((item) => (
            <li
              key={item}
              className="transition-colors duration-300 font-jaro text-lg text-white cursor-pointer uppercase hover:text-orange-500"
            >
              {item}
            </li>
          ))}
          <li>
            <PlayAudio />
          </li>
        </ul>

        <div
          className={`md:hidden fixed top-20 left-0 right-0 bg-black/30 backdrop-blur-sm transition-all duration-300 rounded-xl ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            {["Projects", "Weapons", "About"].map((item) => (
              <li
                key={item}
                className="transition-colors duration-300 font-jaro text-lg text-white cursor-pointer uppercase hover:text-orange-500"
              >
                {item}
              </li>
            ))}
            <li>
              <PlayAudio />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
