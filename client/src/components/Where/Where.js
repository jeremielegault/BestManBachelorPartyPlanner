import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormContext from "../Reducers/FormContext";

const Where = () => {
  // Until const formdata look at this later
  const { receiveLatLong } = React.useContext(FormContext);

  const [lat, setLat] = useState(null);

  const [lng, setLng] = useState(null);

  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  // Get the location here and send it back to the server
  // useEffect(() => {
  //   fetch("/getlatlon")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Lat and Lon", data);
  //       setLatLon(data);
  //     })
  //     .catch((err) => {
  //       console.log("Error", err);
  //     });
  // }, []);

  return (
    <div>
      <h1>Where?</h1>
      <p>We use your location to generate results based on your selections!</p>
      <h1>Current location:</h1>
      <button onClick={getLocation}>Get Location</button>
      <h1>Coordinates</h1>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
      <Link to="/when">
        {lat && (
          <button
            onClick={() =>
              receiveLatLong({
                lat: lat,
                lng: lng,
              })
            }
          >
            Next
          </button>
        )}
      </Link>
    </div>
  );
};

export default Where;

// .get("/getlatlon", getLatLon)
