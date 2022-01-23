import React from "react";
import AccountBalance from "./AccountBalance";

const UserProfile = (props) => {
  return (
    <div>
      <h1>User Profile</h1>

      <div>Username: {props.user.userName}</div>
      <div>Member Since: {props.user.memberSince}</div>
      <AccountBalance balance={props.balance} />
    </div>
  );
};

export default UserProfile;
