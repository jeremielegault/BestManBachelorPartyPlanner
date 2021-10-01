import React, { useContext, useState, useEffect } from "react";
import FormContext from "../Reducers/FormContext";

const Results = () => {
  const formContext = useContext(FormContext);

  const [recs, setRecs] = useState();

  useEffect(() => {
    fetch(
      `/getlocationsbylatlon/${formContext.state.lat}/${formContext.state.lng}`
      // { headers: { "Access-Control-Allow-Origin": "http://localhost:8000" } }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("response in RESULTS then", data.results);
        setRecs(data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return <h1>Hello!</h1>;
};

export default Results;
