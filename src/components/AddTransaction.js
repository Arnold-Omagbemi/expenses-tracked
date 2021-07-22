import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalSate';


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    // get transctions from localStorage 
   const getTransactionsFromLocalStorage = () => {
     const i = JSON.parse(localStorage.getItem("transactions"));
     if (!i) {
      return [];
    }
     return i;
   };
   
   // set items to localstorage;

   const saveToLocalStorage = (transaction) => {
     //we need to first get the older transactions 
     const items = getTransactionsFromLocalStorage();
     localStorage.setItem(
       "transactions",
       JSON.stringify([transaction, ...items])
     )
   }

    const onSubmit = e => {
      e.preventDefault();
      setText('');
      setAmount('');

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }

      addTransaction(newTransaction);
      saveToLocalStorage(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaction Name</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>  
        </>
    )
}
