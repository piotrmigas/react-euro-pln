import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getRate } from "./redux/dataActions";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getRate());
  }, [dispatch]);

  const rate = useSelector((state) => state.rate);

  return (
    <div className="container">
      <h3 className="text-center">1 EUR = {rate} PLN</h3>
      <AddTransaction rate={rate} />
      <TransactionList />
    </div>
  );
};

export default App;
