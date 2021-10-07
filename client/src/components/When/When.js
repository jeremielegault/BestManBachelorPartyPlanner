import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import FormContext from "../Reducers/FormContext";

// Here the user will select the start and end date of their party. This will in turn automatically set the duration of the event.

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
      <Center>
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
          required
        />

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
          required
        />
      </Center>
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
  background-color: #bee0ed;
  height: 100vh;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Duration = styled.div`
  padding-top: 20px;
`;

const Center = styled.div`
  justify-content: center;
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
  background-color: #87a1c6;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  text-align: center;
  justify-content: center;
`;

export default When;
