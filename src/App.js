import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getRate } from "./redux/dataActions";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

const App = ({ getRate, transactions, rate }) => {
  useEffect(() => {
    getRate();
  }, [getRate]);

  return (
    <div className="container">
      <h3 className="text-center">1 EUR = {rate} PLN</h3>
      <AddTransaction rate={rate} />
      <TransactionList />
    </div>
  );
};

const mapStateToProps = state => ({
  rate: state.rate
});

export default connect(mapStateToProps, { getRate })(App);
