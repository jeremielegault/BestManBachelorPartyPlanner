import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import moment from "moment";

const OldRes = () => {
  const [reservations, setReservations] = useState();

  const [formData, setFormData] = useState();

  const OldResSubmit = () => {
    fetch(`http://localhost:8000/getreservation/${formData}`)
      .then((res) => res.json())
      .then((data) => {
        setReservations(data);
      })

      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <Wrapper>
      <>
        <h1>Returning Client</h1>
        <h2>Type in your reservation number below!</h2>
        <input
          type="text"
          name="groomName"
          onChange={(event) => {
            setFormData(event.target.value);
          }}
          placeholder="Reservation ID"
        ></input>
        <Button
          onClick={() => {
            OldResSubmit();
          }}
        >
          Submit Reservation
        </Button>
        {reservations ? (
          <ConfirmWrap>
            <div>Old reservation:</div>
            <div>
              <P>
                <FormItem>Reservation ID: </FormItem>
                {reservations.data._id}
              </P>
            </div>
            <div>
              <P>
                <FormItem>Groom's Name: </FormItem>
                {reservations.data.groomName}
              </P>
            </div>
            <div>
              <P>
                <FormItem>Best Man: </FormItem>
                {reservations.data.bestMan}
              </P>
            </div>
            <div>
              <P>
                <FormItem>Start Date: </FormItem>
                {moment(reservations.data.start).format("MMM Do YYYY")}
              </P>
            </div>
            <div>
              <P>
                <FormItem>End Date: </FormItem>
                {moment(reservations.data.end).format("MMM Do YYYY")}
              </P>
            </div>
            <div>
              <P>
                <FormItem>Duration: </FormItem>
                {reservations.data.duration}
              </P>
            </div>
            <div>
              <P>
                <FormItem>Number of Guests: </FormItem>
                {reservations.data.numGuests}
              </P>
              <FormItem>Activity Suggestions: </FormItem>
              <P>1. {reservations.data.resultsActivities[0].name}</P>
              <P>2. {reservations.data.resultsActivities[1].name}</P>

              <P>3. {reservations.data.resultsActivities[2].name}</P>
              <FormItem>Bar Suggestions: </FormItem>
              <P>1. {reservations.data.resultsBars[0].name}</P>
              <P>2. {reservations.data.resultsBars[1].name}</P>

              <P>3. {reservations.data.resultsBars[2].name}</P>
              <FormItem>Restaurant Suggestions: </FormItem>
              <P>1. {reservations.data.resultsRestaurants[0].name}</P>
              <P>2. {reservations.data.resultsRestaurants[1].name}</P>

              <P>3. {reservations.data.resultsRestaurants[2].name}</P>
              <FormItem>Hospitals Nearby: </FormItem>
              <P>1. {reservations.data.resultsHospitals[0].name}</P>
              <P>2. {reservations.data.resultsHospitals[1].name}</P>

              <P>3. {reservations.data.resultsHospitals[2].name}</P>
            </div>
          </ConfirmWrap>
        ) : (
          <>
            <div>nothing to display</div>
          </>
        )}
      </>
      <Link to="/homepage">
        <Button>Home</Button>
      </Link>
    </Wrapper>
  );
};

export default OldRes;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  flex: 1;
  background-color: #bee0ed;
  height: 170vh;
  width: 100%;
`;

const ConfirmWrap = styled.div`
  border: 3px solid #87a1c6;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.79rem;
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
  width: 90px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 0.79rem;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;
