import React from "react";

const What = () => {
  return (
    <div>
      <h1>What?</h1>
      <select>
        <label>What type of activities do you enjoy as a group?</label>
        <option selected value="Athletics">
          Athletics
        </option>
        <option value="Experience">Experiences</option>
        <option value=" Intellectual">Intellectual</option>
      </select>
      <select>
        <label>How do you wish to dine?</label>
        <option selected value="Restaurants">
          Restaurants
        </option>
        <option value="DIY">DIY</option>
      </select>
      <select>
        <label>Dietary restrictions?</label>
        <option selected value="Vegan">
          Vegan
        </option>
        <option value="Vegetarian">Vegetarian</option>
      </select>
      <select>
        <label>How would you describe your drinking?</label>
        <option selected value="None">
          None
        </option>
        <option value="Moderate">Moderate</option>
        <option value="Heavy">Heavy</option>
      </select>
      <select>
        <label>What's your budget?</label>
        <option selected value="$">
          $
        </option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
      </select>
      <button>Next</button>
    </div>
  );
};

export default What;
