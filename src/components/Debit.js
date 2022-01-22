import React from 'react'
import '../styles/transactions.css'
import AccountBalance from './AccountBalance';

const Debit = (props) =>{

    function dateFix(date){
        return date.slice(0, 10);
    }

    const ren = props.debit.map(data => (
        <div className='transaction'>
            <p><strong>{data.description}</strong></p>
            <p>{`Spent: $${data.amount}`}</p>
            <p>{"Purchased on: "+ dateFix(data.date)}</p> 
        </div>
        ))
    
        return(
            <div className='transactionPage'>
                 <div className='balance'>
                    <AccountBalance/>
                </div>

                <div>
                    <h1 className='heading'>Debit transactions</h1>
                    {ren}
                </div>
                
               
            </div>
        )
}

export default Debit