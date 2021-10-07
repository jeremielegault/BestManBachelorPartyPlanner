import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <Wrapper>
      <h1>Consider it booked!</h1>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </Wrapper>
  );
};

export default ThankYou;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: #bee0ed;
  height: 100vh;
`;

const Button = styled.button`
  height: 45px;
  width: 90px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;
