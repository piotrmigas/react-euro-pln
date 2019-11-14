import React from "react";

const ListItem = ({ name, amount, pln, removeItem }) => (
  <li className="list-group-item">
    <span className="font-weight-bold">{name} </span>
    <span>{amount} EUR => </span>
    <span>{pln} PLN</span>
    <button className="btn btn-danger btn-sm remove-btn" onClick={removeItem}>
      &times;
    </button>
  </li>
);

export default ListItem;
