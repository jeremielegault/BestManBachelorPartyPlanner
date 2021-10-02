import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import FormContext from "../Reducers/FormContext";

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
      `http://localhost:8000/getlocationsbylatlon/${formContext.state.lat}/${formContext.state.lng}/${formContext.state.activity}`,
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
      `http://localhost:8000/getlocationsbylatlon/${formContext.state.lat}/${formContext.state.lng}/${formContext.state.eat}`,
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
      `http://localhost:8000/getlocationsbylatlon/${formContext.state.lat}/${formContext.state.lng}/${formContext.state.drinking}`,
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
    <>
      <h1>Choose an Activity:</h1>
      {activities ? (
        activities.map((activity) => (
          <Suggestion key={uuidv4()}>
            name: {activity.name} address: {activity.vicinity}
          </Suggestion>
        ))
      ) : (
        <h1>No Results, sorry!</h1>
      )}
      <h1>Choose a Restaurant:</h1>
      {restos ? (
        restos.map((resto) => (
          <Suggestion key={uuidv4()}>
            name: {resto.name} address: {resto.vicinity}
          </Suggestion>
        ))
      ) : (
        <h1>Here's a helpful weekend menu!</h1>
      )}
      <h1>Choose a drinking establishment:</h1>
      {bars ? (
        bars.map((bar) => (
          <Suggestion key={uuidv4()}>
            name: {bar.name} address: {bar.vicinity}
          </Suggestion>
        ))
      ) : (
        <h1>Enjoy your tea with lemon!</h1>
      )}
    </>
  );
};

const Suggestion = styled.div``;

export default Results;
