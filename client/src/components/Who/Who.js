import React from "react";

const Who = () => {
  return (
    <div>
      <h1>Who?</h1>
      <form>
        <label>
          Name of the groom:
          <input type="text" name="GroomName" />
        </label>
        <label>
          Number of guests:
          <input type="number" name="NumGuests" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button>Next</button>
    </div>
  );
};

export default Who;
