import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange, addTransaction } from "../redux/dataActions";

const AddTransaction = ({ rate }) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const amount = useSelector((state) => state.amount);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      name,
      amount: +amount,
      pln: +(amount * rate).toFixed(2),
    };
    dispatch(addTransaction(newTransaction));
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col">
          <input
            id="transactionName"
            type="text"
            className="form-control"
            placeholder="Nazwa transakcji"
            onChange={(e) => dispatch(handleChange(e.target.value, "name"))}
          />
        </div>
        <div className="col">
          <input
            id="transactionValue"
            type="number"
            className="form-control"
            placeholder="EUR"
            onChange={(e) => dispatch(handleChange(e.target.value, "amount"))}
            min="0"
            step="0.01"
          />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <button
            className="btn btn-primary mt-3 mb-3"
            disabled={!(name && amount)}
          >
            Dodaj transakcje
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTransaction;
