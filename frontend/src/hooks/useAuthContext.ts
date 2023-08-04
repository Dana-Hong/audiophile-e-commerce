import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useModalContext must be used within a ModalContext provider.");
  }

  return context;
}
