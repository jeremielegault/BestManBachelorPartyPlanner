import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormContext from "../Reducers/FormContext";

const What = () => {
  const {
    state: { activity, eat, dietaryRes, drinking, budget },
    receiveFormInfoFromWhat,
  } = React.useContext(FormContext);

  // Handle all three pieces (start, end, duration) form data in state
  const [formData, setFormData] = useState({
    activity,
    eat,
    dietaryRes,
    drinking,
    budget,
  });

  console.log("Form Context!", activity, eat, dietaryRes, drinking, budget);

  return (
    <div>
      <h1>What?</h1>

      <label>What type of activities do you enjoy as a group?</label>
      <select
        selected={formData.activity}
        value={formData.activity}
        onChange={(event) => {
          // setEndDate(date);
          setFormData({ ...formData, activity: event.target.value });
        }}
      >
        <option defaultValue="Athletics">Athletics</option>
        <option value="Experience">Experiences</option>
        <option value=" Intellectual">Intellectual</option>
      </select>

      <label>How do you wish to dine?</label>
      <select
        selected={formData.eat}
        value={formData.eat}
        onChange={(event) => {
          // setEndDate(date);
          setFormData({ ...formData, eat: event.target.value });
        }}
      >
        <option defaultValue="Restaurants">Restaurants</option>
        <option value="DIY">DIY</option>
      </select>

      <label>Dietary restrictions?</label>
      <select
        selected={formData.dietaryRes}
        value={formData.dietaryRes}
        onChange={(event) => {
          // setEndDate(date);
          setFormData({ ...formData, dietaryRes: event.target.value });
        }}
      >
        <option value="Omnivore">Omnivore</option>
        <option defaultValue="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
      </select>

      <label>How would you describe your drinking?</label>
      <select
        selected={formData.drinking}
        value={formData.drinking}
        onChange={(event) => {
          // setEndDate(date);
          setFormData({ ...formData, drinking: event.target.value });
        }}
      >
        <option defaultValue="None">None</option>
        <option value="Moderate">Moderate</option>
        <option value="Heavy">Heavy</option>
      </select>

      <label>What's your budget?</label>
      <select
        selected={formData.budget}
        value={formData.budget}
        onChange={(event) => {
          // setEndDate(date);
          setFormData({ ...formData, budget: event.target.value });
        }}
      >
        <option defaultValue="$">$ 100-200 a person</option>
        <option value="$$">$$ 200-350 a person</option>
        <option value="$$$">$$$ 350+ a person</option>
      </select>
      {console.log("Form Data", formData)}
      <Link to="/results/:id">
        <button
          onClick={() =>
            receiveFormInfoFromWhat({
              ...formData,
            })
          }
        >
          Next
        </button>
      </Link>
    </div>
  );
};

export default What;
