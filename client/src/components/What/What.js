import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormContext from "../Reducers/FormContext";

// This page contains a menu that allows the user to select activities, choose how they would like to handle eating, whether they have dietary restrictions, quantify their drinking habits and set their budget for the party.

const What = () => {
  const {
    state: { activity, eat, dietaryRes, drinking, budget },
    receiveFormInfoFromWhat,
    // handleSubmit,
  } = React.useContext(FormContext);

  // Handle all three pieces (start, end, duration) form data in state
  const [formData, setFormData] = useState({
    activity,
    eat,
    dietaryRes,
    drinking,
    budget,
  });

  const formContext = useContext(FormContext);

  return (
    <WhatWrap>
      <PageTitle>What?</PageTitle>

      <FormLabel>What type of activities do you enjoy as a group?</FormLabel>
      <DropdownForm
        selected={formData.activity}
        value={formData.activity}
        onChange={(event) => {
          setFormData({ ...formData, activity: event.target.value });
        }}
      >
        <option defaultValue="None"></option>
        <option value="hiking|sportif|hockey|basketball|soccer">Sports</option>
        <option value="escaperoom|lasertag|rageroom|axethrowing|paintball">
          Experiences
        </option>
        <option value="boardgame|chess|museum|artgallery|concert">
          Intellectual Pursuits
        </option>
      </DropdownForm>
      <DivLine />
      <FormLabel>How do you wish to dine?</FormLabel>
      <DropdownForm
        selected={formData.eat}
        value={formData.eat}
        onChange={(event) => {
          setFormData({ ...formData, eat: event.target.value });
        }}
      >
        <option defaultValue="None"></option>
        <option value="restaurant">Restaurants</option>
        <option value="DIY">DIY</option>
      </DropdownForm>
      <DivLine />
      <FormLabel>Dietary restrictions?</FormLabel>
      <DropdownForm
        selected={formData.dietaryRes}
        value={formData.dietaryRes}
        onChange={(event) => {
          setFormData({ ...formData, dietaryRes: event.target.value });
        }}
      >
        <option defaultValue="None"></option>
        <option value="omnivore">Omnivore</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
      </DropdownForm>
      <DivLine />
      <FormLabel>How would you describe your drinking?</FormLabel>
      <DropdownForm
        selected={formData.drinking}
        value={formData.drinking}
        onChange={(event) => {
          setFormData({ ...formData, drinking: event.target.value });
        }}
      >
        <option defaultValue="None"></option>
        <option value="cafe">We don't drink</option>
        <option value="bar">Light</option>
        <option value="nightclub">Moderate</option>
        <option value="pub">Heavy</option>
      </DropdownForm>
      <DivLine />
      <FormLabel>What's your budget?</FormLabel>
      <DropdownForm
        selected={formData.budget}
        value={formData.budget}
        onChange={(event) => {
          setFormData({ ...formData, budget: event.target.value });
        }}
      >
        <option defaultValue="None"></option>
        <option value="2">$ 100-200 a person</option>
        <option value="3">$$ 200-350 a person</option>
        <option value="4">$$$ 350+ a person</option>
      </DropdownForm>
      <DivLine />
      <Link to="/results">
        <Button
          onClick={() => {
            receiveFormInfoFromWhat({
              ...formData,
            });
            // handleSubmit(formContext.state);
          }}
        >
          Next
        </Button>
      </Link>
    </WhatWrap>
  );
};

const FormLabel = styled.label`
  font-size: 1rem;
  padding-bottom: 15px;
`;

const PageTitle = styled.h1`
  font-size: 1.802rem;
`;

const WhatWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bee0ed;
  height: 100vh;
  text-align: center;
  justify-content: center;
`;

const DivLine = styled.div`
  border: 1px;
  margin: 5px 0 5px;
  width: 500px;
`;

const DropdownForm = styled.select`
  background-color: #87a1c6;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;

const Button = styled.button`
  height: 35px;
  width: 60px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.266rem;
`;

export default What;
