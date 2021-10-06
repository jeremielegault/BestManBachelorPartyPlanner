import React from "react";
import { GiBowTie } from "react-icons/gi";
import styled from "styled-components";
import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";
import Profile from "./Auth/Profile";

// Landin page of the app where user will log in. It will be impossible to progress unless the user has logged in as the Next button only displays when the user has logged in.

const LoginTitlePage = () => {
  return (
    <HomePageWrap>
      <PageTitle>Best Man</PageTitle>
      <h2>Bachelor Party Planner</h2>
      <BodyText>
        Plan a party that will please the groom and scandalize the bride.
      </BodyText>
      <Bowtie>
        <GiBowTie />
      </Bowtie>
      <LoginButtons>
        <LoginButton />
        <LogoutButton />
      </LoginButtons>
      <Profile />
    </HomePageWrap>
  );
};

export default LoginTitlePage;

const BodyText = styled.p`
  font-size: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.802rem;
`;

const HomePageWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bee0ed;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
`;

const LoginButtons = styled.div``;

const Bowtie = styled.div`
  transition: all 3s;
  height: 50px;
  &:hover {
    transform: rotate(360deg);
  }
`;
