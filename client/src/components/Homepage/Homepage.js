import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// First page that the user sees after logging in that explains how to progress through the app.

const Homepage = () => {
  return (
    <HomePageWrap>
      <PageTitle>Best Man</PageTitle>
      <PageSubtitle>Bachelor Party Planner</PageSubtitle>
      <BodyText>
        Fill out the following pages to generate recommendations based on your
        selections!
      </BodyText>
      <Link to="/where">
        <Button>Next</Button>
      </Link>
      <PageSubtitle>OR</PageSubtitle>
      <BodyText>Check on an old reservation!</BodyText>
      <Link to="/oldres">
        <OldButton>Welcome Back!</OldButton>
      </Link>
    </HomePageWrap>
  );
};

const BodyText = styled.p`
  font-size: 1rem;
`;

const PageSubtitle = styled.h2`
  font-size: 1.424rem;
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
  height: 100vh;
  height: 100vh;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

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

const OldButton = styled.button`
  height: 35px;
  width: 70px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 0.79rem;
`;

export default Homepage;
