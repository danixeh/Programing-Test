import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isLogged = localStorage.getItem("token");

  if (isLogged) {
    return <Outlet />;
  } else {
    return <Navigate to="/store/login" />;
  }
};

export default ProtectedRoutes;
