import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("acces_token");
  if (!token && token === null) {
    return <Navigate to="/login" />;
  }
  return <>{children || <Outlet />}</>;
};
