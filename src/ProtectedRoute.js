import React from "react";
import { Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

const ProtectedRoute = ({
  isAuth: isAuth,
  component: Component,
  path: path,
  ...rest
}) => {
  console.log(path);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth === true) {
          return <Component />;
        } else {
          return <Home />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
