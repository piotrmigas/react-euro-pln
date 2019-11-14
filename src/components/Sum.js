import React from "react";

const Sum = ({ sumEuro, sumPln }) => (
  <div className="ml-3 mt-3">
    <h3>Suma transakcji:</h3>
    <span>{sumEuro} EUR => </span>
    <span>{sumPln} PLN</span>
  </div>
);

export default Sum;
