import React, { useState } from "react";
import "../styles/transactions.css";
import AccountBalance from "./AccountBalance";
import { nanoid } from "nanoid";

const Debit = (props) => {
  const [formValues, setFormValues] = useState({
    id: nanoid(),
    description: "",
    amount: "",
    date: "",
  });

  // cuts date to show YYYY-MM-DD
  function dateFix(date) {
    return date.slice(0, 10);
  }

  const ren = props.debit.map((data) => (
    <div key={data.id} className="transaction">
      <p>
        <strong>{data.description}</strong>
      </p>
      <p>{`Spent: $${data.amount}`}</p>
      <p>{"Purchased on: " + dateFix(data.date)}</p>
    </div>
  ));

  const onChange = (event) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [event.target.name]: event.target.value,
    }));
  };

  const formSubmit = (event) => {
    event.preventDefault();
    props.chargeDebit(formValues);

    setFormValues({
      id: nanoid(), // new transaction id
      description: "",
      amount: "",
      date: "",
    });
  };

  return (
    <div className="transactionPage">
      <div className="balance">
        <AccountBalance balance={props.balance} />
      </div>

      <form className="transaction-form" onSubmit={formSubmit}>
        <label>Description</label>
        <input
          name="description"
          type="text"
          value={formValues.description}
          onChange={onChange}
        />
        <label>Transaction Amount</label>
        <input name="amount" type="text" value={formValues.amount} onChange={onChange} />
        <label>Transaction Date</label>
        <input name="date" type="text" value={formValues.date} onChange={onChange} />
        <button>Add Transaction</button>
      </form>

      <div>
        <h1 className="heading">Debit transactions</h1>
        {ren}
      </div>
    </div>
  );
};

export default Debit;
