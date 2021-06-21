import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalSate';



export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';

   //Save to Local
   const saveLocalTransactions = () => {
    const item = localStorage.getItem('transactions') || [] 
    // const p = JSON.parse(item);
    console.log(item,p)
    localStorage.setItem('transactions', JSON.stringify([...p, transaction]));
};
const getLocalTransactions = () => {
  const item = localStorage.getItem('transactions');
  
  return item
};
  let transactionsList = getLocalTransactions();
  const [transactions, setTransactions] = useState(transactionsList);
  

  //RUN ONCE WHEN THE APP STARTS
  useEffect(() => { 
    getLocalTransactions();
  }, []);
  //USE EFFECT
  useEffect(() => {
    saveLocalTransactions();
  }, [transaction]);


 
  
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
