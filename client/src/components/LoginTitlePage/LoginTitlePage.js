import React from "react";
import { GiBowTie } from "react-icons/gi";
import styled from "styled-components";
import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";
import Profile from "./Auth/Profile";

const LoginTitlePage = () => {
  return (
    <div>
      <h1>Best Man</h1>
      <h2>Bachelor Party Planner</h2>
      <p>Plan a party that will please the groom and scandalize the bride.</p>
      <Beerhorn>
        <GiBowTie />
      </Beerhorn>
      <LoginButtons>
        <LoginButton />
        <LogoutButton />
      </LoginButtons>
      <Profile />
    </div>
  );
};

export default LoginTitlePage;

const LoginButtons = styled.div``;
const Beerhorn = styled.div`
  transition: all 3s;
  height: 50px;
  &:hover {
    transform: rotate(360deg);
  }
`;
