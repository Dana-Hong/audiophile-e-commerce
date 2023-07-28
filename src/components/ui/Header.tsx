import { useState, useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Hamburger from "../icons/Hamburger";
import ShoppingCart from "../icons/ShoppingCart";
import Cart from "../modals/Cart";
import Logo from "../icons/Logo";

export default function Header() {
  const { cartModal, setCartModal } = useContext(CartContext);
  const [navOpen, setNavOpen] = useState(false);

  function handleBurgerClick() {
    setCartModal(false);
    setNavOpen(!navOpen);
  }

  function handleCartClick() {
    setCartModal(!cartModal);
  }

  return (
    <header
      className={`${navOpen ? "fixed z-30 h-screen" : ""} ${
        cartModal ? "fixed z-30" : ""
      } mx-auto w-full bg-black`}
    >
      <div className="relative mx-auto max-w-[1110px] border-b border-b-zinc-600 py-4">
        <div className="mx-auto flex items-center justify-between text-white">
          <button onClick={handleBurgerClick} className="cursor-pointer p-4 md:hidden">
            <Hamburger />
          </button>
          <div className="hidden items-center gap-11 md:flex min-[1110px]:hidden">
            <button onClick={handleBurgerClick} className="cursor-pointer p-4">
              <Hamburger />
            </button>
            <Link to="/">
              <Logo className="cursor-pointer" />
            </Link>
          </div>
          <Link to="/">
            <Logo className="md:hidden min-[1110px]:block" />
          </Link>
          <nav className="hidden gap-8 text-sm font-bold uppercase leading-6 tracking-[2px] min-[1110px]:flex">
            <Link to="/" className="hover:text-orange">
              Home
            </Link>
            <Link to="/headphones" className="hover:text-orange">
              Headphones
            </Link>
            <Link to="/speakers" className="hover:text-orange">
              Speakers
            </Link>
            <Link to="/earphones" className="hover:text-orange">
              Earphones
            </Link>
          </nav>
          <button onClick={handleCartClick} className="cursor-pointer p-4">
            <ShoppingCart className="fill-white hover:fill-orange" />
          </button>
        </div>
      </div>
      {cartModal && <Cart />}
      <div
        className={`${
          navOpen ? "" : "hidden"
        } absolute top-0 bottom-0 left-0 right-0 flex h-screen items-center bg-almostBlack`}
      >
        <nav className="mx-auto flex w-full max-w-md flex-col gap-4 px-6 font-medium uppercase text-white">
          <div className="flex justify-between">
            <Link onClick={() => setNavOpen(!navOpen)} to="/" className="hover:text-orange">
              Home
            </Link>
            <button className="text-orange" onClick={handleBurgerClick}>
              Close
            </button>
          </div>
          <Link onClick={() => setNavOpen(!navOpen)} to="/headphones" className="hover:text-orange">
            Headphones
          </Link>
          <Link onClick={() => setNavOpen(!navOpen)} to="/speakers" className="hover:text-orange">
            Speakers
          </Link>
          <Link onClick={() => setNavOpen(!navOpen)} to="/earphones" className="hover:text-orange">
            Earphones
          </Link>
        </nav>
      </div>
    </header>
  );
}
