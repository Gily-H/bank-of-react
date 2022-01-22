import React from 'react'
import '../styles/transactions.css'

const Credit = (props) =>{

    function dateFix(date){
        return date.slice(0, 10);
    }

    const ren = props.credit.map(data => (
    <div className='transaction'>
        <p><strong>{data.description}</strong></p>
        <p>{`Spent: $${data.amount}`}</p>
        <p>{"Purchased on: "+ dateFix(data.date)}</p> 
    </div>
    ))

    return(
        <div className='transactionPage'>
            <h1 className='heading'>Credit transactions</h1>
            {ren}
        </div>
    )
}

export default Credit
