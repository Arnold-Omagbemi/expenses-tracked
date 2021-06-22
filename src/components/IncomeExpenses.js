import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalSate';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const transactionsList = () => {
    let list = JSON.parse(localStorage.getItem("transactions"));
    return list;
};

const list = transactionsList() || transactions;

  const amounts = list.map(transaction => transaction.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);


    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{expense}</p>
        </div>
      </div>
    )
}
