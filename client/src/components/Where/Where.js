import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Where = () => {
  const [latlon, setLatLon] = useState([]);

  useEffect(() => {
    fetch("/getlatlon")
      .then((res) => res.json())
      .then((data) => {
        console.log("Lat and Lon", data);
        setLatLon(data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div>
      <h1>Where?</h1>
      <p>We use your location to generate results based on your selections!</p>
      <h1>Current location:{latlon}</h1>
      <Link to="/when">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default Where;

// .get("/getlatlon", getLatLon)
