// libraries
import { useState } from "react";
import { Link } from "react-router-dom";

// hooks
import useModalContext from "../../hooks/useOrderConfirmContext";
import useAuthContext from "../../hooks/useAuthContext";

// components

// icons
import Hamburger from "../icons/Hamburger";
import ShoppingCart from "../icons/ShoppingCart";
import Cart from "../modals/Cart";
import Logo from "../icons/Logo";
import User from "../icons/User";

export default function Header() {
  const { user, setUser } = useAuthContext();
  const { modal, setModal } = useModalContext();
  const [navOpen, setNavOpen] = useState(false);
  const [profileSettingsOpen, setProfileSettingsOpen] = useState(false);

  function handleBurgerClick() {
    setModal({ cart: false, orderConfirm: false });
    setNavOpen(!navOpen);
  }

  function handleCartClick() {
    setProfileSettingsOpen(false);
    setModal((m) => ({ ...m, cart: !modal.cart }));
  }

  function handleProfileClick() {
    setModal({ cart: false, orderConfirm: false });
    setProfileSettingsOpen(!profileSettingsOpen);
  }

  function handleLogout() {
    setProfileSettingsOpen(false);
    setUser(null);
  }

  return (
    <header
      className={`${navOpen ? "fixed z-30 h-screen" : ""} ${
        modal.cart || modal.orderConfirm ? "fixed z-50" : ""
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
          <div className="relative flex gap-4">
            <button onClick={handleProfileClick}>
              <User className="h-5 w-5 fill-white hover:fill-orange" />
            </button>
            {user !== null ? (
              <div
                className={`${
                  profileSettingsOpen ? "" : "hidden"
                } absolute bottom-0 z-40 flex -translate-x-1/2 translate-y-[calc(100%+16px)] flex-col gap-2 rounded-lg bg-almostBlack p-4 text-left text-sm uppercase text-white`}
              >
                <p>{user}</p>
                <Link
                  onClick={() => setProfileSettingsOpen(false)}
                  to="/orders"
                  className="hover:text-orange"
                >
                  Orders
                </Link>
                <Link
                  to={"/"}
                  onClick={handleLogout}
                  className="block text-start hover:text-orange"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <div
                className={`${
                  profileSettingsOpen ? "" : "hidden"
                } absolute bottom-0 z-40 flex -translate-x-1/2 translate-y-[calc(100%+16px)] flex-col gap-2 rounded-lg bg-almostBlack p-4 text-left text-sm uppercase text-white`}
              >
                <Link
                  onClick={() => setProfileSettingsOpen(false)}
                  to="/login"
                  className="hover:text-orange"
                >
                  Login
                </Link>
                <Link
                  onClick={() => setProfileSettingsOpen(false)}
                  to="/signup"
                  className="hover:text-orange"
                >
                  Signup
                </Link>
              </div>
            )}
            <button onClick={handleCartClick} className="p-4">
              <ShoppingCart className="fill-white hover:fill-orange" />
            </button>
          </div>
        </div>
      </div>
      {modal.cart && <Cart />}
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
