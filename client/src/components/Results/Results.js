import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import FormContext from "../Reducers/FormContext";
import { Link } from "react-router-dom";
import { GiSiren } from "react-icons/gi";

const Results = () => {
  // Make the form context available in this component
  const formContext = useContext(FormContext);

  // Generate a unique key for each mapped item
  const { v4: uuidv4 } = require("uuid");

  // State to store results of Activities fetch
  const [activities, setActivities] = useState();

  // State to store results of Restaurants fetch
  const [restos, setRestos] = useState();

  // State to store results of Bar fetch
  const [bars, setBars] = useState();

  // State to store results of Bar fetch
  const [hospitals, setHospitals] = useState();

  const {
    state: {
      resultsActivities,
      resultsBars,
      resultsRestaurants,
      resultsHospitals,
    },
    userConfirmed,
  } = React.useContext(FormContext);

  const [formData, setFormData] = useState({
    resultsActivities,
    resultsBars,
    resultsRestaurants,
    resultsHospitals,
  });

  // Use effect to generate activity dynamically
  useEffect(() => {
    fetch(
      `http://localhost:8000/getactivities/${formContext.state.lat}/${formContext.state.lng}/${formContext.state.activity}`,
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

  // Use effect to generate restaurant list dynamically IF they choose to eat at a restaurant
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
        setRestos(data.data.results.slice(0, 3));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  // Use effect to generate Bar list dynamically if they say that they drink!
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
        setBars(data.data.results.slice(0, 3));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  // Use effect to generate Hospital list dynamically
  useEffect(() => {
    fetch(
      `http://localhost:8000/gethospitals/${formContext.state.lat}/${formContext.state.lng}/`,
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
        setHospitals(data.data.results.slice(0, 3));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <Wrapper>
      <>
        <h1>Choose an Activity:</h1>
      </>
      {/* If the user made an activity selection, render a list of activities relevant to their preferences  */}
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
        // If the user did not select an activity preference, don't render anything
        <p>No Results, sorry!</p>
      )}
      {/* If the user selected "restaurants", this will render a list of suggestions for restaurants based on their location and budget */}
      {formContext.state.eat === "restaurant" && restos ? (
        <>
          <h1>Choose a Restaurant:</h1>
          {restos.map((resto) => (
            <SugWrap>
              <Suggestion key={uuidv4()}>
                <SugTit>Name:</SugTit> {resto.name} <SugTit>Address:</SugTit>
                {resto.vicinity}
              </Suggestion>
            </SugWrap>
          ))}
        </>
      ) : (
        // If the user selected DIY, and they selected Omnivore as their dietary restriction, they will receive a menu/grocery list of food to buy to feed their party. This will in turn be calculated based on the amount of guests at their party and the duration of the party.
        <>
          {formContext.state.dietaryRes === "omnivore" &&
          formContext.state.eat === "DIY" ? (
            <>
              <h1>Menu:</h1>
              <h2>Here's a delicious meaty menu that's easy to prepare!</h2>
              <Link to="/meatymenu">
                <Button>Get Menu!</Button>
              </Link>
            </>
          ) : (
            // If the user selected DIY, and they selected Vegan or Vegetarian as their dietary restriction, they will receive a menu/grocery list of food to buy to feed their party. This will in turn be calculated based on the amount of guests at their party and the duration of the party.
            <>
              <h1>Menu:</h1>
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
      {/* If the user chose light-heavy drinking as their drinking option, they will receive a list of bars clsoe to them based on their budget. If they chose we don't drink it will be cafes.*/}
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
      {/* Bachelor parties can be dangerous. The user will receive a list of hospitals close to them.  */}
      <h1>Here are the hospitals nearest to your location:</h1>
      <p>Please stay safe out there!</p>
      {hospitals ? (
        hospitals.map((hospital) => (
          <SugWrap>
            <GiSiren />
            <Suggestion key={uuidv4()}>
              <SugTit>Name:</SugTit> {hospital.name} <SugTit>Address:</SugTit>
              {hospital.vicinity}
            </Suggestion>
          </SugWrap>
        ))
      ) : (
        <p>No hospitals found</p>
      )}
      <div></div>
      <Link to="/confirmation">
        <ConfirmButton
          onClick={() => {
            userConfirmed({
              ...formData,
              resultsActivities: activities,
              resultsBars: bars,
              resultsRestaurants: restos,
              resultsHospitals: hospitals,
            });
          }}
        >
          Confirmation
        </ConfirmButton>
      </Link>
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
  align-items: center;
  flex: 1;
  background-color: #bee0ed;
  height: 270vh;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  height: 45px;
  width: 90px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
`;

const ConfirmButton = styled.button`
  height: 45px;
  width: 120px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  align-items: center;
  margin-top: 50px;
`;

const SugTit = styled.div`
  font-weight: bold;
`;

export default Results;
