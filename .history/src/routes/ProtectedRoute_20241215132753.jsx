import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    <Navigate to="/loginPage" />;
  }
  return <div>{children || <Outlet />}</div>;
};
