import React, { useContext } from 'react';

import { Context } from '../context/state';

const List = props => {
    const { transactions, deleteTransaction } = useContext(Context);

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(t => (
                    <li className={t.amount < 0 ? 'minus' : 'plus'} key={t.id}>
                        {t.text} <span>{t.amount < 0 && '-'} ${Math.abs(t.amount)}</span>
                        <button className="delete-btn" onClick={() => deleteTransaction(t.id)}>x</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default List;