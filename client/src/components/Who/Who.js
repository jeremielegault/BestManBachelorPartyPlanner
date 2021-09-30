import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormContext from "../Reducers/FormContext";
// groomName  numGuests

const Who = () => {
  const {
    state: { groomName, numGuests },
    receiveFormInfoFromWho,
  } = React.useContext(FormContext);

  const [formData, setFormData] = useState({ groomName, numGuests });

  return (
    <div>
      <h1>Who?</h1>
      <form>
        <label>
          Name of the groom:
          <input
            type="text"
            value={formData.groomName}
            name="groomName"
            onChange={(event) => {
              setFormData({ ...formData, groomName: event.target.value });
            }}
            placeholder="Write groom's name here"
          />
          {console.log("Form Data", formData)}
        </label>
        <label>
          Number of guests:
          <input
            type="number"
            value={formData.numGuests}
            name="numGuests"
            min="0"
            onChange={(event) =>
              setFormData({ ...formData, numGuests: event.target.value })
            }
          />
        </label>
      </form>
      <Link to="/what">
        <button
          onClick={() =>
            receiveFormInfoFromWho({
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

export default Who;
