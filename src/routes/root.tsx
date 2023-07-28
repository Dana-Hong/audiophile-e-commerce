import { Outlet, useSearchParams } from "react-router-dom";
import { CheckoutContext } from "../context/CheckoutContext";
import { useContext, useState } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

export type CheckoutItem = {
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export default function Root() {
  const [checkout, setCheckout] = useState<CheckoutItem[]>([]);
  return (
    <>
      <CheckoutContext.Provider value={{ checkout, setCheckout }}>
        <Header />
        <Outlet />
        <Footer />
      </CheckoutContext.Provider>
    </>
  );
}
