import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList  from './components/TransactionList'
import NewTransaction from './components/NewTransaction'
import {GlobalProvider} from './context/GlobalState'

import './App.css';

function App() {
  return (
    <GlobalProvider>
    <div className="container main-div">
      <div className="col s12 m6">
      <Header />
      <Balance />
    
    <IncomeExpenses />
    <TransactionList />
    <NewTransaction />
    </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
