import React from "react";

const AddTransaction = ({ name, amount, handleNameChange, handleAmountChange, addItem }) => {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col">
            <input
              id="transactionName"
              name="transactionName"
              type="text"
              className="form-control"
              placeholder="Nazwa transakcji"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="col">
            <input
              id="transactionValue"
              type="number"
              className="form-control"
              placeholder="EUR"
              value={amount}
              onChange={handleAmountChange}
              min="0"
            />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <button
              className="btn btn-primary mt-3 mb-3"
              onClick={addItem}
              disabled={!(name && amount)}
            >
              Dodaj transakcje
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
