import React from "react";

import AccountBalance from "./AccountBalance";
import "../styles/profile.css";

const UserProfile = (props) => {

  return (
    <div className="user">
      <h1>User Profile</h1>

      <div>Username: {props.user.userName}</div>
      <div>Member Since: {props.user.memberSince}</div>
    </div>
  );
};

export default UserProfile;
