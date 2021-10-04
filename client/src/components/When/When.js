import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import FormContext from "../Reducers/FormContext";

const When = () => {
  const {
    state: { start, end },
    receiveFormInfoFromForm,
  } = React.useContext(FormContext);

  // Handle all three pieces (start, end, duration) form data in state
  const [formData, setFormData] = useState({ start, end });

  // Dynamically calculate duration of the party
  const getDuration = (d1, d2) => {
    const diff = d2.getTime() - d1.getTime();

    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <WhenWrap>
      <PageTitle>When?</PageTitle>
      <PageSubtitle>Select the date(s)</PageSubtitle>

      <BodyText>Start Date</BodyText>
      <DatePicker
        selected={formData.start}
        onChange={(date) => {
          setFormData((curr) => {
            return {
              ...curr,
              start: date,
              duration: getDuration(date, curr.end),
            };
          });
        }}
      />
      {console.log("Form Data", formData)}

      <BodyText>End Date</BodyText>
      <DatePicker
        selected={formData.end}
        onChange={(date) => {
          setFormData((curr) => {
            return {
              ...curr,
              end: date,
              duration: getDuration(curr.start, date),
            };
          });
        }}
      />

      {/* User selects the number of days */}
      <Duration>
        <label>
          <BodyText>Duration (days):</BodyText>
          <div></div>
          <StyledInput
            type="number"
            value={formData.duration}
            name="duration"
            min="0"
          >
            {getDuration(formData.start, formData.end)}
          </StyledInput>
        </label>
      </Duration>

      <Link to="/who">
        <NextButton
          onClick={() =>
            receiveFormInfoFromForm({
              ...formData,
            })
          }
        >
          Next
        </NextButton>
      </Link>
    </WhenWrap>
  );
};

const PageTitle = styled.h1`
  font-size: 1.802rem;
`;

const PageSubtitle = styled.h2`
  font-size: 1.424rem;
`;

const BodyText = styled.p`
  font-size: 1rem;
`;

const WhenWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #84d3fb; */
  background-color: #bee0ed;
`;

const Duration = styled.div`
  padding-top: 20px;
`;

const NextButton = styled.button`
  margin-top: 25px;
  height: 35px;
  width: 70px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
`;

const StyledInput = styled.p`
  /* background-color: #ebab00; */
  /* background-color: #af87fd; */
  background-color: #87a1c6;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export default When;
