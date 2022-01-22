import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Debit from "./components/Debit"
import Credit from "./components/Credit"
import { Route, Routes } from "react-router-dom";
import axios from 'axios'

const App = () => {
  const [transactions, setTrans] = React.useState({
    debit:[],
    credit: []
  })
  const [balance, setBalance] = React.useState(0);
  const[user, setUser] = React.useState(
    {
      userName:"",
      memberSince:""
    }
  )
  
  useEffect(()=>{
    const fetchTransactions = async () =>{
      const debit = await axios.get("https://moj-api.herokuapp.com/debits");
      const credit = await axios.get("https://moj-api.herokuapp.com/credits");
      setTrans({
        debit: debit.data,
        credit: credit.data
      })
    }

    fetchTransactions()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/Debit"} element={<Debit
          debit = {transactions.debit}
        />}/>
        <Route path={"/Credit"} element={<Credit
          credit = {transactions.credit}
        />}/>
      </Routes>
    </div>
  );
};

export default App;
