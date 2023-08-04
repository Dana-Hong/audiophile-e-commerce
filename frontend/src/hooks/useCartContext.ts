import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw Error("useCartContext must be used within a CartContext provider.");
  }

  return context;
}
