import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  // Unique user id is at user.sub
  if (user !== undefined) {
    const userData = user;
    localStorage.setItem("User", JSON.stringify(userData));
  }
  return (
    isAuthenticated && (
      <div>
        <UserAvatar src={user.picture} alt={user.name} />
        <div></div>
        <ProfileText>{user.name}</ProfileText>
        <Link to="/homepage">
          <button>Next</button>
        </Link>
      </div>
    )
  );
};

const UserAvatar = styled.img`
  border-radius: 50%;
  height: 40px;
`;
const ProfileText = styled.h2``;

export default Profile;
