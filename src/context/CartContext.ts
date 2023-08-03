import { createContext } from "react";
import { SetStateAction } from "react";
import { CartType } from "../routes/root";

type CartContextType = {
  cart: CartType;
  setCart: React.Dispatch<SetStateAction<CartType>>;
};

export const CartContext = createContext<CartContextType>({} as CartContextType);
