import React from "react";

const What = () => {
  return (
    <div>
      <h1>What?</h1>
      <label>What type of activities do you enjoy as a group?</label>
      <select>
        <option defaultValue="Athletics">Athletics</option>
        <option value="Experience">Experiences</option>
        <option value=" Intellectual">Intellectual</option>
      </select>
      <label>How do you wish to dine?</label>
      <select>
        <option defaultValue="Restaurants">Restaurants</option>
        <option value="DIY">DIY</option>
      </select>
      <label>Dietary restrictions?</label>
      <select>
        <option value="Omnivore">Omnivore</option>
        <option defaultValue="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
      </select>
      <label>How would you describe your drinking?</label>
      <select>
        <option defaultValue="None">None</option>
        <option value="Moderate">Moderate</option>
        <option value="Heavy">Heavy</option>
      </select>
      <label>What's your budget?</label>
      <select>
        <option defaultValue="$">$ 100-200 a person</option>
        <option value="$$">$$ 200-350 a person</option>
        <option value="$$$">$$$ 350+ a person</option>
      </select>
      <button>Next</button>
    </div>
  );
};

export default What;
