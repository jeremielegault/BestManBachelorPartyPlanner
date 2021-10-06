import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormContext from "../Reducers/FormContext";

// Here the user will input the groom's name and manually input the amount of guests that will be attending their party.

const Who = () => {
  const {
    state: { groomName, numGuests },
    receiveFormInfoFromWho,
  } = React.useContext(FormContext);

  const [formData, setFormData] = useState({ groomName, numGuests });

  return (
    <WhoWrap>
      <PageTitle>Who?</PageTitle>
      <form>
        <FormLabel>Name of the groom:</FormLabel>
        <DivLine />
        <input
          type="text"
          value={formData.groomName}
          name="groomName"
          onChange={(event) => {
            setFormData({ ...formData, groomName: event.target.value });
          }}
          placeholder="Write groom's name here"
        />

        <DivLine />
        <FormLabel>Number of guests:</FormLabel>
        <DivLine />
        <input
          type="number"
          value={formData.numGuests}
          name="numGuests"
          min="0"
          onChange={(event) =>
            setFormData({ ...formData, numGuests: event.target.value })
          }
        />
      </form>
      <Link to="/what">
        <Button
          onClick={() =>
            receiveFormInfoFromWho({
              ...formData,
            })
          }
        >
          Next
        </Button>
      </Link>
    </WhoWrap>
  );
};

const WhoWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bee0ed;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  /* width: 100vw; */
`;

const DivLine = styled.div`
  border: 1px;
  width: 500px;
  padding-top: 30px;
`;

const FormLabel = styled.label`
  font-size: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.802rem;
`;

const Button = styled.button`
  height: 35px;
  width: 60px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.266rem;
  margin-top: 15px;
`;
export default Who;
