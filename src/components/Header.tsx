import { useState } from "react";

import Hamburger from "./icons/Hamburger";
import ShoppingCart from "./icons/ShoppingCart";
import Logo from "./Logo";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  function handleBurgerClick() {
    setNavOpen(!navOpen);
  }

  return (
    <header className="relative w-full bg-black text-white">
      <div className="mx-auto flex w-full max-w-[1110px] items-center justify-between border-b border-b-zinc-600 py-4">
        <button
          onClick={handleBurgerClick}
          className="cursor-pointer p-4 md:hidden"
        >
          <Hamburger />
        </button>
        <div className="hidden items-center gap-11 md:flex min-[1110px]:hidden">
          <button onClick={handleBurgerClick} className="cursor-pointer p-4">
            <Hamburger />
          </button>
          <Logo className="cursor-pointer" />
        </div>
        <Logo className="md:hidden min-[1110px]:block" />
        <nav className="hidden gap-8 text-sm font-bold uppercase leading-6 tracking-[2px] min-[1110px]:flex">
          <a href="/" className="hover:text-orange">
            Home
          </a>
          <a href="/" className="hover:text-orange">
            Headphones
          </a>
          <a href="/" className="hover:text-orange">
            Speakers
          </a>
          <a href="/" className="hover:text-orange">
            Earphones
          </a>
        </nav>
        <button className="cursor-pointer p-4">
          <ShoppingCart className="fill-white hover:fill-orange" />
        </button>
      </div>
      <div
        className={`${
          navOpen ? "" : "hidden"
        } absolute top-0 bottom-0 left-0 right-0 h-screen bg-almostBlack`}
      >
        <button onClick={handleBurgerClick}>Back</button>
        <nav className="flex flex-col gap-4 font-medium uppercase">
          <a href="/" className="hover:text-orange">
            Home
          </a>
          <a href="/" className="hover:text-orange">
            Headphones
          </a>
          <a href="/" className="hover:text-orange">
            Speakers
          </a>
          <a href="/" className="hover:text-orange">
            Earphones
          </a>
        </nav>
      </div>
    </header>
  );
}
