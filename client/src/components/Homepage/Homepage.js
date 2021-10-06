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

export default Homepage;
