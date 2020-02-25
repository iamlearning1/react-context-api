import React, { useContext } from 'react';

import { Context } from '../context/state';

const Balance = props => {
    const { transactions } = useContext(Context);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${transactions.reduce((initValue, t) => initValue + t.amount, 0).toFixed(2)}</h1>
        </>
    )
}

export default Balance;