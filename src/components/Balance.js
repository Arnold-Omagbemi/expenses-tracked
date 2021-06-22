import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalSate'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const transactionsList = () => {
        let list = JSON.parse(localStorage.getItem("transactions"));
        return list;
    };

    const list = transactionsList() || transactions;

        const amounts = list.map((transaction) => transaction.amount);
        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
      
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}
