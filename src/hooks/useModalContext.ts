import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export default function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw Error("useModalContext must be used within a ModalContext provider.");
  }

  return context;
}
