import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import FormContext from "../Reducers/FormContext";

const When = () => {
  const {
    state: { start, end, duration },
    receiveFormInfoFromForm,
  } = React.useContext(FormContext);

  // Handle all three pieces (start, end, duration) form data in state
  const [formData, setFormData] = useState({ start, end, duration });

  console.log("Form Context!", start, end, duration);
  return (
    <WhenWrap>
      <h1>When?</h1>
      <p>Select the date(s)</p>

      <p>Start Date</p>
      <DatePicker
        selected={formData.start}
        onChange={(date) => {
          // setForm(date);
          setFormData({ ...formData, start: date });
        }}
      />
      {console.log("Form Data", formData)}

      <p>End Date</p>
      <DatePicker
        selected={formData.end}
        onChange={(date) => {
          // setEndDate(date);
          setFormData({ ...formData, end: date });
        }}
      />

      {/* User selects the number of days */}
      <Duration>
        <label>
          Duration (days):
          <input
            type="number"
            value={formData.duration}
            name="duration"
            min="0"
            onChange={(event) =>
              setFormData({ ...formData, duration: event.target.value })
            }
            placeholder="Select the number of days"
          />
        </label>
      </Duration>

      <Link to="/who">
        <button
          onClick={() =>
            receiveFormInfoFromForm({
              ...formData,
            })
          }
        >
          Next
        </button>
      </Link>
    </WhenWrap>
  );
};

const WhenWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Duration = styled.div`
  padding-top: 20px;
`;
export default When;
