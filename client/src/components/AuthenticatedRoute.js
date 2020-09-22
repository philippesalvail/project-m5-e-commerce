import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginBtn from "./Login-Btn";
import { Route } from "react-router-dom";

const AuthenticatedRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated == true ? (
    <Route {...rest} path={path} component={Component} />
  ) : (
    <></>
  );
};

export default AuthenticatedRoute;
