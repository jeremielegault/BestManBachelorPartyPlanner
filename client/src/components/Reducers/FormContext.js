import React from "react";

export const FormContext = React.createContext();

// This is to set a unique reservation ID for each user's reservation.
const { v4: uuidv4 } = require("uuid");

// This is what the object that contains all the user input looks like.
const initialState = {
  _id: uuidv4(),
  bestMan: "",
  lat: "",
  lng: "",
  start: new Date(),
  end: new Date(),
  duration: "",
  groomName: "",
  numGuests: "",
  activity: "",
  eat: "",
  dietaryRes: "",
  drinking: "",
  budget: "",
  resultsActivities: "",
  resultsBars: "",
  resultsRestaurants: "",
  resultsHospitals: "",
  confirmationData: {},
};

function reducer(state, action) {
  switch (action.type) {
    // This sets the start date, end date and duration of the user's party
    case "receive-form-info-from-form": {
      return {
        ...state,
        start: action.start,
        end: action.end,
        duration: action.duration,
      };
    }

    // This sets the latitude and longitude of the user
    case "receive-lat-long": {
      return {
        ...state,
        lat: action.lat,
        lng: action.lng,
      };
    }

    // This takes the name of the user that has logged in and puts it in the form
    case "receive-best-man-info": {
      return {
        ...state,
        bestMan: action.bestMan,
      };
    }

    // This receives the information that the user has put in with regards to the groom's name and the number of guests
    case "receive-form-info-from-who": {
      return {
        ...state,
        groomName: action.groomName,
        numGuests: action.numGuests,
      };
    }

    // This receives the information that the user has put in on the WHAT page. This will generate the results afterwards.
    case "receive-form-info-from-what": {
      return {
        ...state,
        activity: action.activity,
        eat: action.eat,
        dietaryRes: action.dietaryRes,
        drinking: action.drinking,
        budget: action.budget,
      };
    }

    // This receives the resuts that were generated on the results page for the user.
    case "receive-results": {
      const confirmationData = {};

      confirmationData.activities = action.resultsActivities.map((activity) => [
        activity.name,
        activity.vicinity,
      ]);

      confirmationData.bars = action.resultsBars.map((bar) => [
        bar.name,
        bar.vicinity,
      ]);

      confirmationData.restaurants = action.resultsRestaurants.map(
        (restaurant) => [restaurant.name, restaurant.vicinity]
      );

      confirmationData.hospitals = action.resultsHospitals.map((hospital) => [
        hospital.name,
        hospital.vicinity,
      ]);

      return {
        ...state,
        confirmationData,
        resultsActivities: action.resultsActivities,
        resultsBars: action.resultsBars,
        resultsRestaurants: action.resultsRestaurants,
        resultsHospitals: action.resultsHospitals,
      };
    }

    default:
      throw new Error(`unrecognized action: ${action.type}`);
  }
}

export const FormProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const receiveLatLong = (data) => {
    dispatch({
      type: "receive-lat-long",
      ...data,
    });
  };

  const receiveFormInfoFromForm = (data) => {
    dispatch({
      type: "receive-form-info-from-form",
      ...data,
    });
  };

  const receiveBestManInfo = (data) => {
    dispatch({
      type: "receive-best-man-info",
      ...data,
    });
  };

  const receiveFormInfoFromWho = (data) => {
    dispatch({
      type: "receive-form-info-from-who",
      ...data,
    });
  };

  const receiveFormInfoFromWhat = (data) => {
    dispatch({
      type: "receive-form-info-from-what",
      ...data,
    });
  };

  const userConfirmed = (data) => {
    dispatch({
      type: "receive-results",
      ...data,
    });
  };

  return (
    <FormContext.Provider
      value={{
        state,
        receiveFormInfoFromForm,
        receiveFormInfoFromWho,
        receiveFormInfoFromWhat,
        receiveBestManInfo,
        receiveLatLong,
        userConfirmed,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
