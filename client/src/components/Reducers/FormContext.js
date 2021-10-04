import React from "react";

export const FormContext = React.createContext();

const { v4: uuidv4 } = require("uuid");

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
};

function reducer(state, action) {
  switch (action.type) {
    case "receive-form-info-from-form": {
      console.log("Taco", action);
      return {
        ...state,
        start: action.start,
        end: action.end,
        duration: action.duration,
      };
    }
    case "receive-lat-long": {
      return {
        ...state,
        lat: action.lat,
        lng: action.lng,
      };
    }
    case "receive-best-man-info": {
      return {
        ...state,
        bestMan: action.bestMan,
      };
    }
    case "receive-form-info-from-who": {
      return {
        ...state,
        groomName: action.groomName,
        numGuests: action.numGuests,
      };
    }
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

  const handleSubmit = () => {
    fetch("/addreservations", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          console.log("Success!");
        } else {
          console.log("Error");
        }
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
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
