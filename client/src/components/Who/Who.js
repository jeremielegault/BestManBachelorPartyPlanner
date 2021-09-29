import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="/what">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default Who;
