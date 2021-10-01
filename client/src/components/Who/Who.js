import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormContext from "../Reducers/FormContext";
// groomName  numGuests

const Who = () => {
  const {
    state: { groomName, numGuests },
    receiveFormInfoFromWho,
  } = React.useContext(FormContext);

  const [formData, setFormData] = useState({ groomName, numGuests });

  return (
    <WhoWrap>
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
        <DivLine />
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
    </WhoWrap>
  );
};

const WhoWrap = styled.div`
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
export default Who;
