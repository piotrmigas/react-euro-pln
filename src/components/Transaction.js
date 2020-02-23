import React from "react";
import { connect } from "react-redux";
import { deleteTransaction } from "../redux/dataActions";

const Transaction = ({ transaction, deleteTransaction }) => (
  <li className="list-group-item">
    <span className="font-weight-bold">{transaction.name} </span>
    <span>{transaction.amount} EUR => </span>
    <span>{transaction.pln} PLN</span>
    <button
      className="btn btn-danger btn-sm remove-btn"
      onClick={() => deleteTransaction(transaction.id)}
    >
      &times;
    </button>
  </li>
);

export default connect(null, { deleteTransaction })(Transaction);
