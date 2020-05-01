import React from "react";

const MaxTransaction = ({ maxName, maxEuro, maxPln }) => (
  <div className="col">
    <h3>Najwyższa transakcja:</h3>
    <h4>{maxName}</h4>
    <span> {maxEuro} EUR => </span>
    <span> {maxPln} PLN</span>
  </div>
);

export default MaxTransaction;
