import React, { useContext } from "react";
import styled from "styled-components";
import FormContext from "../Reducers/FormContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import moment from "moment";
import Results from "../Results/Results";

// Page that displays the user input across the app (actual suggestions are on the return page)

// Confirmation Component
const Confirmation = () => {
  // Access the context that contains every piece of user input
  const formContext = useContext(FormContext);

  const history = useHistory();

  // const { handleSubmit } = React.useContext(FormContext);

  const handleSubmit = () => {
    fetch("http://localhost:8000/addreservations", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formContext.state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          console.log("Success!");
          history.push("/thankyou");
        } else {
          console.log("Error");
        }
      });
  };

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
        <FormItem>Activity Suggestions: </FormItem>
        <P>1. {formContext.state.confirmationData.activities[0][0]}</P>
        <P>2. {formContext.state.confirmationData.activities[1][0]}</P>

        <P>3. {formContext.state.confirmationData.activities[2][0]}</P>
        <FormItem>Bar Suggestions: </FormItem>
        <P>1. {formContext.state.confirmationData.bars[0][0]}</P>
        <P>2. {formContext.state.confirmationData.bars[1][0]}</P>

        <P>3. {formContext.state.confirmationData.bars[2][0]}</P>
        <FormItem>Restaurant Suggestions: </FormItem>
        <P>1. {formContext.state.confirmationData.restaurants[0][0]}</P>
        <P>2. {formContext.state.confirmationData.restaurants[1][0]}</P>

        <P>3. {formContext.state.confirmationData.restaurants[2][0]}</P>
        <FormItem>Hospitals Nearby: </FormItem>
        <P>1. {formContext.state.confirmationData.hospitals[0][0]}</P>
        <P>2. {formContext.state.confirmationData.hospitals[1][0]}</P>

        <P>3. {formContext.state.confirmationData.hospitals[2][0]}</P>
      </ConfirmWrap>
      {/* <Link to="/results"> */}
      <Button
        onClick={() => {
          handleSubmit();
        }}
      >
        Save to database!
      </Button>
      {/* </Link> */}
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
