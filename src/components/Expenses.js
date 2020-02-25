import React, { useContext } from 'react';

import { Context } from '../context/state';

const Expenses = props => {
    const { transactions } = useContext(Context);

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0).toFixed(2)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${Math.abs(transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0)).toFixed(2)}</p>
        </div>
      </div>
    )
}

export default Expenses;