import React from "react";

export const FormContext = React.createContext();

const initialState = {
  bestMan: "",
  where: "",
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
      return {
        ...state,
        where: action.where,
        start: action.start,
        end: action.end,
        duration: action.duration,
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

  return (
    <FormContext.Provider
      value={{
        state,
        receiveFormInfoFromForm,
        receiveFormInfoFromWho,
        receiveFormInfoFromWhat,
        receiveBestManInfo,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
