import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import FormContext from "../Reducers/FormContext";

const Results = () => {
  const formContext = useContext(FormContext);

  const [recs, setRecs] = useState();

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
        setRecs(data.data.results.slice(0, 3));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <>
      <h1>Choose an activity:</h1>
      {recs ? (
        recs.map((rec) => <Suggestion> name: {rec.name} </Suggestion>)
      ) : (
        <h1>No Results, sorry!</h1>
      )}
      <h1>Choose a Restaurant:</h1>

      <h1>Choose an Activity:</h1>
    </>
  );
};

const Suggestion = styled.div``;

export default Results;
