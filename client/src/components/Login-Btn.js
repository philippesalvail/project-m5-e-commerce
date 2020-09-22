import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginBtn = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  return (
    <>
      {!isLoading ? (
        <button
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Login
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoginBtn;
