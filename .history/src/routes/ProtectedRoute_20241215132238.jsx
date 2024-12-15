import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    <Navigate to="/login" />;
  }
  return {children || <Outlet />};
};
