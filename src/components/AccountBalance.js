import React, { useState } from "react";

const AccountBalance = (props) => {
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>Account Balance: </h1>
      <h3>{`$${props.balance}`}</h3>
    </div>
  );
};

export default AccountBalance;
