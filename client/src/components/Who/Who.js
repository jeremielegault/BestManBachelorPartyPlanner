import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormContext from "../Reducers/FormContext";
// groomName  numGuests

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
        <input
          type="text"
          value={formData.groomName}
          name="groomName"
          onChange={(event) => {
            setFormData({ ...formData, groomName: event.target.value });
          }}
          placeholder="Write groom's name here"
        />
        {console.log("Form Data", formData)}

        <DivLine />
        <FormLabel>Number of guests:</FormLabel>
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
`;

const DivLine = styled.div`
  border: 1px;
  margin: 5px 0 5px;
  width: 500px;
`;

const FormLabel = styled.label`
  font-size: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.802rem;
`;

const DropdownForm = styled.select`
  /* background-color: #ebab00; */
  /* background-color: #af87fd; */
  background-color: #87a1c6;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;

const Button = styled.button`
  /* background-color: #af87fd; */
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
