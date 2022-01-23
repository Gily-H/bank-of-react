import React, { useState } from "react";
import "../styles/transactions.css";
import { nanoid } from "nanoid";

const Credit = (props) =>{
    const [formValues, setFormValues] = useState({
        id: nanoid(),
        description: "",
        amount: "",
        date: "",
      });


    function dateFix(date){
        return date.slice(0, 10);
    }

    const ren = props.credit.map(data => (
    <div className='transaction'>
        <p><strong>{data.description}</strong></p>
        <p>{`Spent: $${Number(data.amount).toFixed(2)}`}</p>
        <p>{"Purchased on: "+ dateFix(data.date)}</p> 
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
        props.chargeCredit(formValues);
    
        setFormValues({
          id: nanoid(), // new transaction id
          description: "",
          amount: "",
          date: "",
        });
      };

    return(
        <div className='transactionPage'>
                <div className="transactionForm">
                    <h1>Add Transaction</h1>
                    <form className="transaction-form" onSubmit={formSubmit}>
                        <label>Description of purchase: </label>
                        <input placeholder="..." name="description" type="text" value={formValues.description} onChange={onChange}/>
                        <br/>
                        <label>Transaction Amount: </label>
                        <input placeholder="..." name="amount" type="text" value={formValues.amount} onChange={onChange}/>
                        <br/>
                        <label>Transaction date: </label>
                        <input placeholder="..." name="date" type="text" value={formValues.date} onChange={onChange} />
                        <br/>
                        <button>Add Transaction</button>
                    </form>
            </div>


            <div>
                <h1 className='heading'>Credit transactions</h1>
                {ren}
            </div>

            
        </div>
    );
};

export default Credit
