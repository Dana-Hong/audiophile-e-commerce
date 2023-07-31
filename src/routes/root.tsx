import { Outlet } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { CheckoutContext } from "../context/CheckoutContext";
import { useState } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

export type CheckoutItem = {
  name: string;
  shortname: string;
  image: string;
  price: number;
  quantity: number;
};

export default function Root() {
  const [checkout, setCheckout] = useState<CheckoutItem[]>([]);
  const [cartModal, setCartModal] = useState<boolean>(false);

  return (
    <>
      <CartContext.Provider value={{ cartModal, setCartModal }}>
        <CheckoutContext.Provider value={{ checkout, setCheckout }}>
          <Header />
          <Outlet />
          <Footer />
        </CheckoutContext.Provider>
      </CartContext.Provider>
    </>
  );
}
