import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormContext from "../Reducers/FormContext";

const What = () => {
  const {
    state: { activity, eat, dietaryRes, drinking, budget },
    receiveFormInfoFromWhat,
    handleSubmit,
  } = React.useContext(FormContext);

  // Handle all three pieces (start, end, duration) form data in state
  const [formData, setFormData] = useState({
    activity,
    eat,
    dietaryRes,
    drinking,
    budget,
  });

  // console.log("Form Context!", activity, eat, dietaryRes, drinking, budget);

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
        <option value="stadium">Athletics</option>
        <option value="casino">Experiences</option>
        <option value="museum">Intellectual</option>
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
        <option value="bar">Moderate</option>
        <option value="bar">Heavy</option>
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
      {/* {console.log("Form Data", formData)} */}
      <Link to="/confirmation">
        <Button
          onClick={() => {
            receiveFormInfoFromWhat({
              ...formData,
            });
            handleSubmit();
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
`;

const PageTitle = styled.h1`
  font-size: 1.802rem;
`;

const WhatWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #84d3fb; */
  background-color: #bee0ed;
  /* font-weight: bold; */
`;

const DivLine = styled.div`
  border: 1px;
  margin: 5px 0 5px;
  width: 500px;
`;

const DropdownForm = styled.select`
  /* background-color: #ebab00; */
  /* background-color: #af87fd; */
  background-color: #87a1c6;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;

const Button = styled.button`
  /* background-color: #af87fd; */
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
