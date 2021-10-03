import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FormContext from "../../Reducers/FormContext";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  // Unique user id is at user.sub
  if (user !== undefined) {
    const userData = user;
    localStorage.setItem("User", JSON.stringify(userData));
  }
  const { receiveBestManInfo } = React.useContext(FormContext);

  return (
    isAuthenticated && (
      <div>
        <UserAvatar src={user.picture} alt={user.name} />
        <div></div>
        <ProfileText>{user.name}</ProfileText>
        <Link to="/homepage">
          <Button
            onClick={() => {
              receiveBestManInfo({
                bestMan: user.name,
              });
            }}
          >
            Next
          </Button>
        </Link>
      </div>
    )
  );
};

const UserAvatar = styled.img`
  margin-top: 15px;
  border-radius: 50%;
  height: 40px;
`;
const ProfileText = styled.h2`
  font-size: 1.266rem;
`;

const Button = styled.button`
  /* background-color: #af87fd; */
  height: 35px;
  width: 70px;
  font-weight: bold;
  background-color: #ebab00;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.266rem;
`;

export default Profile;
