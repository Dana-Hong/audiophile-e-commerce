// libraries
import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

// context
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { Modal, ModalContext } from "../context/ModalContext";

// components
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

export type UserType = { email: string; token: string };

export type CheckoutItem = {
  name: string;
  category: string;
  slug: string;
  shortname: string;
  image: string;
  price: number;
  quantity: number;
};

export type CartType = {
  items: CheckoutItem[];
  user_id: string;
};

export default function Root() {
  const lsUser = localStorage.getItem("user");
  const lsCart = localStorage.getItem("cart");
  const [user, setUser] = useState<UserType>(
    lsUser ? JSON.parse(localStorage.getItem("user") as string) : { email: "", token: "" }
  );
  const [modal, setModal] = useState<Modal>({ cart: false, orderConfirm: false });
  const [cart, setCart] = useState<CartType>(
    lsCart ? JSON.parse(localStorage.getItem("cart") as string) : { items: [], user_id: "" }
  );

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <ModalContext.Provider value={{ modal, setModal }}>
          <CartContext.Provider value={{ cart, setCart }}>
            <div className="flex flex-col">
              <Header />
              <Outlet />
              <Footer />
              <ScrollRestoration />
            </div>
          </CartContext.Provider>
        </ModalContext.Provider>
      </AuthContext.Provider>
    </>
  );
}
