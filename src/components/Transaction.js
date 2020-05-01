import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../redux/dataActions";

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item">
      <span className="font-weight-bold">{transaction.name} </span>
      <span>{transaction.amount} EUR => </span>
      <span>{transaction.pln} PLN</span>
      <button
        className="btn btn-danger btn-sm remove-btn"
        onClick={() => dispatch(deleteTransaction(transaction.id))}
      >
        &times;
      </button>
    </li>
  );
};

export default Transaction;
