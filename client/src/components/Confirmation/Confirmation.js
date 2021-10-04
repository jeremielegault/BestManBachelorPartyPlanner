import React, { useContext } from "react";
import styled from "styled-components";
import FormContext from "../Reducers/FormContext";
import { Link } from "react-router-dom";
import moment from "moment";

// Confirmation Component
const Confirmation = () => {
  // Access the context
  const formContext = useContext(FormContext);

  console.log("Form Context", formContext.state);

  return (
    <Wrapper>
      <h1>Confirmation</h1>
      <h2>Your party is confirmed!</h2>
      <h3>Please save your Reservation ID</h3>
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
            {moment(formContext.state.start).format("MMM Do YYYY")}
          </P>
        </div>
        <div>
          <P>
            <FormItem>End Date: </FormItem>
            {moment(formContext.state.end).format("MMM Do YYYY")}
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
        <Button>Get Recommendations!</Button>
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
  background-color: #bee0ed;
`;

const ConfirmWrap = styled.div`
  border: 3px solid #87a1c6;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const P = styled.p`
  margin-top: 6px;
  font-size: 1rem;
`;

const FormItem = styled.span`
  font-weight: bold;
`;

const Button = styled.button`
  /* background-color: #af87fd; */
  height: 60px;
  width: 160px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;
