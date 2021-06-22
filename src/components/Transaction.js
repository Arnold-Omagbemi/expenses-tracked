import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalSate';



export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';

   //get items from localStorage
   const getTransactionsFromLocalStorage = () => {
   const i = JSON.parse(localStorage.getItem("transactions"));
   if (!i) {
     return [];
   }
    return i;
  };

  const deleteItemFromLocalStorage = () => {
    const tran = getTransactionsFromLocalStorage();
    const newList = tran.filter((t) => {
      return t.id !== transaction.id;
    });
    // dispatch also to global context
  deleteTransaction(transaction.id);

  localStorage.setItem("transactions", JSON.stringify([...newList]));
  };
  
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.text}
           <span>
             {sign}${Math.abs(transaction.amount)}
             </span>
             <button onClick={deleteItemFromLocalStorage} className="delete-btn">
               x
               </button>
        </li>
    )
}
