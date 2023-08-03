import useAuthContext from "../hooks/useAuthContext";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes() {
  const { user } = useAuthContext();
  return user.email !== "" ? <Outlet /> : <Navigate to="/login" />;
}
