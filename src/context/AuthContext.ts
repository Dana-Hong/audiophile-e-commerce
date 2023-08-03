import { createContext } from "react";
import { UserType } from "../routes/root";

export type UserContextType = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

export const AuthContext = createContext<UserContextType>({
  user: { email: "", token: "" },
} as UserContextType);
