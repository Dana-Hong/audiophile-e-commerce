import { createContext } from "react";

type CartContextType = {
  cartModal: boolean;
  setCartModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartContext = createContext<CartContextType>({} as CartContextType);
