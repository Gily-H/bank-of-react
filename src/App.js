import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Debit from "./components/Debit";
import Credit from "./components/Credit";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/LogIn";
import AccountBalance from "./components/AccountBalance";

const App = () => {
  const [transactions, setTrans] = React.useState({
    debit: [],
    credit: [],
  });
  const [balance, setBalance] = React.useState(10234.23);
  const [user, setUser] = React.useState({
    userName: "",
    memberSince: "",
  });

  useEffect(() => {
    const fetchTransactions = async () => {
      const debit = await axios.get("https://moj-api.herokuapp.com/debits");
      const credit = await axios.get("https://moj-api.herokuapp.com/credits");
      setTrans({
        debit: debit.data,
        credit: credit.data,
      });
    };

    fetchTransactions();
  }, []);

  const chargeBalance = (transaction) => {
    setBalance(
      (prevBalance) => prevBalance + Number.parseFloat(transaction.amount).toFixed(2)
    );
  };

  // add debit transaction to list
  const chargeDebit = (transaction) => {
    setTrans((prevTransactions) => ({
      ...prevTransactions,
      debit: [...prevTransactions.debit, transaction],
    }));
    chargeBalance(-Math.abs(transaction)); // update balance
  };

  // add credit transaction to list
  const chargeCredit = (transaction) => {
    setTrans((prevTransactions) => ({
      ...prevTransactions,
      credit: [...prevTransactions.credit, transaction],
    }));
    chargeBalance(transaction); // update balance
  };

  const mockLogIn = (logInInfo) => {
    setUser({
      userName: logInInfo.userName,
      memberSince: new Date()
        .toISOString()
        .split("T")[0] /* needs to be converted to YYYY-MM-DD */,
    });
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<><Home/><AccountBalance balance={balance}/></>} />
        <Route path={"/login"} element={<LogIn mockLogIn={mockLogIn} />} />
        <Route
          path={"/login/userProfile"}
          element={<><UserProfile user={user}/><AccountBalance balance={balance}/></>}
        />
        <Route
          path={"/Debit"}
          element={
          <>
          <AccountBalance balance={balance}/>
            <Debit
              debit={transactions.debit}
              chargeDebit={chargeDebit}
            />
          </>
          }
        />
        <Route
          path={"/Credit"}
          element={
            <>
            <AccountBalance balance={balance}/>
            <Credit
              credit={transactions.credit}
              chargeCredit={chargeCredit}
            />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
