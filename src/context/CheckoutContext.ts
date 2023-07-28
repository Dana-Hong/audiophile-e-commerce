import { createContext } from "react";
import { CheckoutItem } from "../routes/root";
import { SetStateAction } from "react";

type CheckoutContextType = {
  checkout: CheckoutItem[];
  setCheckout: React.Dispatch<SetStateAction<CheckoutItem[]>>;
};

export const CheckoutContext = createContext<CheckoutContextType>({} as CheckoutContextType);
