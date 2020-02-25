import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Expenses from './components/Expenses';
import List from './components/List';
import Transaction from './components/Transaction';

import { Provider } from './context/state';

import './App.css';

function App() {
  return (
    <Provider>
     <Header>Expense Tracker</Header>
     <div className="container">
      <Balance></Balance>
      <Expenses></Expenses>
      <List></List>
      <Transaction></Transaction>
     </div>
    </Provider>
  );
}

export default App;
