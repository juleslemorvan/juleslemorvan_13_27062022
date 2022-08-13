import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = useSelector((state) => state.userLogin);
  // if there is a token in userLogin ? go children of private route component :  return sign-in
  return auth?.userInfo?.body?.token ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoutes;
