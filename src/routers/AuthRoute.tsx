import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = ({ isAllowed }: { isAllowed: boolean }) => {
  if (!isAllowed) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

export default AuthRoute;
