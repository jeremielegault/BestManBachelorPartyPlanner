import React, { useEffect, useState } from "react";

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
      <h1>Current location:{latlon}</h1>
    </div>
  );
};

export default Where;

// .get("/getlatlon", getLatLon)
