import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const When = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  console.log("start date", startDate);
  console.log("end date", endDate);
  return (
    <div>
      <h1>When?</h1>
      <p>Select the date(s)</p>
      <p>Start Date</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <p>End Date</p>
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      <label>
        Duration (days):
        <input type="number" name="NumGuests" min="0" />
      </label>
      <button>Next</button>
    </div>
  );
};

export default When;
