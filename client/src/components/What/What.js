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
      <select
        selected={formData.activity}
        value={formData.activity}
        onChange={(event) => {
          setFormData({ ...formData, activity: event.target.value });
        }}
      >
        <option defaultValue="None"></option>
        <option value="bowling_alley">Athletics</option>
        <option value="casino">Experiences</option>
        <option value="museum">Intellectual</option>
      </select>
      <DivLine />
      <label>How do you wish to dine?</label>
      <select
        selected={formData.eat}
        value={formData.eat}
        onChange={(event) => {
          setFormData({ ...formData, eat: event.target.value });
        }}
      >
        <option defaultValue="None"></option>
        <option value="restaurant">Restaurants</option>
        <option value="supermarket">DIY</option>
      </select>
      <DivLine />
      <label>Dietary restrictions?</label>
      <select
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
      </select>
      <DivLine />
      <label>How would you describe your drinking?</label>
      <select
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
      </select>
      <DivLine />
      <label>What's your budget?</label>
      <select
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
      </select>
      <DivLine />
      {/* {console.log("Form Data", formData)} */}
      <Link to="/confirmation">
        <button
          onClick={() => {
            receiveFormInfoFromWhat({
              ...formData,
            });
            handleSubmit();
          }}
        >
          Next
        </button>
      </Link>
    </WhatWrap>
  );
};

const WhatWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivLine = styled.div`
  border: 1px;
  margin: 5px 0 5px;
  width: 500px;
`;

export default What;
