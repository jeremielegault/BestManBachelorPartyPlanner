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
      <h1>What?</h1>

      <label>What type of activities do you enjoy as a group?</label>
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
      <label>How do you wish to dine?</label>
      <DropdownForm
        selected={formData.eat}
        value={formData.eat}
        onChange={(event) => {
          setFormData({ ...formData, eat: event.target.value });
        }}
      >
        <option defaultValue="None"></option>
        <option value="restaurant">Restaurants</option>
        <option value="supermarket">DIY</option>
      </DropdownForm>
      <DivLine />
      <label>Dietary restrictions?</label>
      <DropdownForm
        selected={formData.dietaryRes}
        value={formData.dietaryRes}
        onChange={(event) => {
          setFormData({ ...formData, dietaryRes: event.target.value });
        }}
      >
        <option defaultValue="None"></option>
        <option value="Omnivore">Omnivore</option>
        <option value="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
      </DropdownForm>
      <DivLine />
      <label>How would you describe your drinking?</label>
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
      <label>What's your budget?</label>
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
          <h2>Next</h2>
        </Button>
      </Link>
    </WhatWrap>
  );
};

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
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;

const Button = styled.button`
  /* background-color: #af87fd; */
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
`;

export default What;
