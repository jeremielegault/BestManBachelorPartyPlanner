import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import FormContext from "../Reducers/FormContext";
import { Link } from "react-router-dom";

const Results = () => {
  // Make the form context available in this component
  const formContext = useContext(FormContext);
  const { v4: uuidv4 } = require("uuid");

  // State to store results of Activities fetch
  const [activities, setActivities] = useState();

  // State to store results of Restaurants fetch
  const [restos, setRestos] = useState();

  // State to store results of Bar fetch
  const [bars, setBars] = useState();

  // Use effect to generate activity dynamically
  useEffect(() => {
    fetch(
      `http://localhost:8000/getlocationsbylatlon/${formContext.state.lat}/${formContext.state.lng}/${formContext.state.activity}/${formContext.state.budget}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("response in RESULTS then", data.data.results.slice(0, 3));
        setActivities(data.data.results.slice(0, 3));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  // Use effect to generate restaurant list dynamically
  useEffect(() => {
    fetch(
      `http://localhost:8000/getlocationsbylatlon/${formContext.state.lat}/${formContext.state.lng}/${formContext.state.eat}/${formContext.state.budget}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("response in RESULTS then", data.data.results.slice(0, 3));
        setRestos(data.data.results.slice(0, 3));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  // Use effect to generate Bar list dynamically
  useEffect(() => {
    fetch(
      `http://localhost:8000/getlocationsbylatlon/${formContext.state.lat}/${formContext.state.lng}/${formContext.state.drinking}/${formContext.state.budget}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("response in RESULTS then", data.data.results.slice(0, 3));
        setBars(data.data.results.slice(0, 3));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <Wrapper>
      <h1>Choose an Activity:</h1>
      {activities ? (
        activities.map((activity) => (
          <SugWrap>
            <Suggestion key={uuidv4()}>
              <SugTit>Name:</SugTit> {activity.name} <SugTit>Address:</SugTit>
              {activity.vicinity}
            </Suggestion>
          </SugWrap>
        ))
      ) : (
        <p>No Results, sorry!</p>
      )}
      <h1>Choose a Restaurant:</h1>
      {formContext.state.eat === "restaurant" && restos ? (
        restos.map((resto) => (
          <SugWrap>
            <Suggestion key={uuidv4()}>
              <SugTit>Name:</SugTit> {resto.name} <SugTit>Address:</SugTit>
              {resto.vicinity}
            </Suggestion>
          </SugWrap>
        ))
      ) : (
        <>
          {formContext.state.dietaryRes === "omnivore" &&
          formContext.state.eat === "DIY" ? (
            <>
              <h2>Here's a delicious meaty menu that's easy to prepare!</h2>
              <Link to="/meatymenu">
                <Button>Get Menu!</Button>
              </Link>
            </>
          ) : (
            <>
              <h2>
                Here's a delicious vegan/vegetarian menu that's easy to prepare!
              </h2>
              <Link to="/vegmenu">
                <Button>Get Menu!</Button>
              </Link>
            </>
          )}
        </>
      )}
      <h1>Choose a Drinking Establishment:</h1>
      {bars ? (
        bars.map((bar) => (
          <SugWrap>
            <Suggestion key={uuidv4()}>
              <SugTit>Name:</SugTit> {bar.name} <SugTit>Address:</SugTit>
              {bar.vicinity}
            </Suggestion>
          </SugWrap>
        ))
      ) : (
        <p>Consider having tea with lemon!</p>
      )}
    </Wrapper>
  );
};

const Suggestion = styled.div``;

const SugWrap = styled.div`
  background-color: #87a1c6;
  color: white;
  border-radius: 5px;
  padding: 3px 0 3px 0;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 2px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  flex: 1;
  background-color: #bee0ed;
`;

const Button = styled.button`
  /* background-color: #af87fd; */
  height: 45px;
  width: 90px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
`;

const SugTit = styled.div`
  font-weight: bold;
`;

export default Results;
