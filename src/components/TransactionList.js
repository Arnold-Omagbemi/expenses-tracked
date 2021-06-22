import React, { useContext } from 'react'
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalSate'

export const TransactionList = () => {

 const transactionListFromLocalStorage = () => {
   return JSON.parse(localStorage.getItem("transactions"));
 };

 // transactions can either come from the context object or from localStorage
 const { transactions } = useContext(GlobalContext);

 // || means if "transactionsListFromLocalStorage()" is empty pick the next option on the right
  const list = transactionListFromLocalStorage() || transactions;
    return (
        <>
           <h3>History</h3>
      <ul className="list">
        {list && list.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
        
      </ul> 
        </>
    );
};
