import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

// Logout button using Auth0

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return isAuthenticated && <Button onClick={() => logout()}>Log Out</Button>;
};

const Button = styled.button`
  height: 35px;
  width: 90px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.266rem;
`;

export default LogoutButton;
