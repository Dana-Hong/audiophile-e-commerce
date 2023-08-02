import { createContext } from "react";

export type Modal = {
  cart: boolean;
  orderConfirm: boolean;
};

type ModalContextType = {
  modal: Modal;
  setModal: React.Dispatch<React.SetStateAction<Modal>>;
};

export const ModalContext = createContext<ModalContextType>({} as ModalContextType);
