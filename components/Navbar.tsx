import Image from "next/image";
import Link from "next/link";
import { PlayAudio } from "./PlayAudio";

function Navbar() {
  return (
    <header className="w-full container mx-auto z-50 fixed left-1/2 -translate-x-1/2">
      <nav
        className="flex items-center justify-between h-20"
        aria-label="Main navigation"
      >
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
        <ul className="flex items-center gap-6" role="list">
          {["Projects", "Weapons", "About"].map((item) => (
            <li
              key={item}
              className="transition-colors duration-300 font-jaro text-lg text-white cursor-pointer uppercase hover:text-orange-500"
            >
              {item}
            </li>
          ))}
          <PlayAudio />
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
