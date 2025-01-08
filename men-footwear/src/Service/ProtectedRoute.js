import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const auth = localStorage.getItem("user");
  return <>{auth ? <Outlet /> : <Navigate path="/login" />}</>;
}

export default ProtectedRoute;
