import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const When = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <h1>When?</h1>
      <p>Select the date(s)</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <button>Next</button>
    </div>
  );
};

export default When;
