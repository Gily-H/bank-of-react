import React from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      {/* <img
        src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png"
        alt="bank"
      /> */}
      <AccountBalance balance={props.balance} />
    </div>
  );
};

export default Home;
