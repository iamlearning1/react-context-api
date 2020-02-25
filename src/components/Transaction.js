import React, { useState, useContext } from 'react';

import { Context } from '../context/state'

const Transaction = props => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(Context);

    const submit = (event) => {
        event.preventDefault();
        addTransaction({ text, amount: Number(amount), id: +Math.random() * 1000 })
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={submit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" placeholder="Enter text..." onChange={(event) => setText(event.target.value)} value={text} />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" placeholder="Enter amount..." onChange={event => setAmount(event.target.value)} value={amount} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default Transaction;