import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FormContext from "../Reducers/FormContext";

// Here the user gives permission to use their latitude and longitude. This is so crucial that the ability to continue navigating through the app is dependent on receiving this info.

const Where = () => {
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

  return (
    <WhereWrap>
      <PageTitle>Where?</PageTitle>
      <BodyText>
        We use your location to generate results based on your selections!
      </BodyText>
      <PageSubtitle>Current location:</PageSubtitle>
      <Button onClick={getLocation}>Get Location</Button>
      <PageSubtitle>Coordinates:</PageSubtitle>
      <BodyText>{status}</BodyText>
      {lat && <BodyText>Latitude: {lat}</BodyText>}
      {lng && <BodyText>Longitude: {lng}</BodyText>}
      <Link to="/when">
        {lat && (
          <NextButton
            onClick={() =>
              receiveLatLong({
                lat: lat,
                lng: lng,
              })
            }
          >
            Next
          </NextButton>
        )}
      </Link>
    </WhereWrap>
  );
};

const BodyText = styled.p`
  font-size: 1rem;
`;

const PageSubtitle = styled.h2`
  font-size: 1.424rem;
`;

const PageTitle = styled.h1`
  font-size: 1.802rem;
`;
const WhereWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bee0ed;
  height: 100vh;
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

const NextButton = styled.button`
  height: 35px;
  width: 70px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
`;

export default Where;
