import React, { useState, useReducer } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const whenInitialState = {
  start: "",
  end: "",
  duration: "",
};
function reducer(state, action) {}

const When = () => {
  const [state, dispatch] = useReducer(reducer, { whenInitialState });
  // Select the dates from the Datepicker
  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  // Handle the submission of the form to local storage
  const [formData, setFormData] = useState(whenInitialState);

  // const [selectedFlight, setSelectedFlight] = React.useState(null);

  // const handleChange = (value, name) => {
  //   setFormData({ ...formData, [name]: value });
  // };

  console.log("start date", startDate);
  console.log("end date", endDate);
  return (
    <div>
      <h1>When?</h1>
      <p>Select the date(s)</p>

      <p>Start Date</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          setFormData({ ...formData, start: startDate });
        }}
      />
      {console.log("Form Data", formData)}

      <p>End Date</p>
      <DatePicker
        selected={endDate}
        onChange={(date) => {
          setEndDate(date);
          setFormData({ ...formData, end: endDate });
        }}
      />

      {/* User selects the number of days */}
      <label>
        Duration (days):
        <input
          type="number"
          name="NumGuests"
          min="0"
          onChange={(event) =>
            setFormData({ ...formData, duration: event.target.value })
          }
          placeholder="Select the number of days"
        />
      </label>
      <Link to="/who">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default When;
