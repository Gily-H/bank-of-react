import React,{ useState } from "react";

const AccountBalance = () => {
  const [balance, setBalance] = useState(102428.91)
  return (
    <div>
      <h1 style={{textDecoration: "underline"}}>Account Balance: </h1>
      <h3>{`$${balance}`}</h3>
    </div>
  
  )
};

export default AccountBalance;
