import React, { useContext } from "react";
import styled from "styled-components";
import FormContext from "../Reducers/FormContext";
import { Link } from "react-router-dom";

// Confirmation Component
const Confirmation = () => {
  // Access the context
  const formContext = useContext(FormContext);

  console.log("Form Context", formContext.state);

  return (
    <Wrapper>
      <h1>Confirmation</h1>
      <h3>Your party is confirmed!</h3>
      <h4>Please save your Reservation ID</h4>
      <ConfirmWrap>
        <div>
          <P>
            <FormItem>Reservation ID: </FormItem>
            {formContext.state._id}
          </P>
        </div>
        <div>
          <P>
            <FormItem>Groom's Name: </FormItem>
            {formContext.state.groomName}
          </P>
        </div>
        <div>
          <P>
            <FormItem>Best Man: </FormItem>
            {formContext.state.bestMan}
          </P>
        </div>
        <div>
          <P>
            <FormItem>Start Date: </FormItem>
            {formContext.state.start.date}
          </P>
        </div>
        <div>
          <P>
            <FormItem>End Date: </FormItem>
            {formContext.state.end.date}
          </P>
        </div>
        <div>
          <P>
            <FormItem>Duration: </FormItem>
            {formContext.state.duration}
          </P>
        </div>
        <div>
          <P>
            <FormItem>Number of Guests: </FormItem>
            {formContext.state.numGuests}
          </P>
        </div>
      </ConfirmWrap>
      <Link to="/results">
        <button>Get Recommendations!</button>
      </Link>
    </Wrapper>
  );
};

export default Confirmation;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const ConfirmWrap = styled.div`
  border: 3px solid;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const P = styled.p`
  margin-top: 6px;
`;

const FormItem = styled.span`
  font-weight: bold;
`;
