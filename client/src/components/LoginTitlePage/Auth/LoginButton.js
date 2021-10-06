import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

// Login button using Auth0

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button onClick={() => loginWithRedirect()}>Log In</Button>
    )
  );
};

const Button = styled.button`
  height: 35px;
  width: 70px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.266rem;
`;

export default LoginButton;
