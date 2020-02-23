import React from "react";
import Transaction from "./Transaction";
import MaxTransaction from "./MaxTransaction";
import Sum from "./Sum";
import { connect } from "react-redux";

const TransactionList = ({ transactions }) => {
  const listItems = transactions.map(transaction => (
    <Transaction key={transaction.id} transaction={transaction} />
  ));

  const maxEuro = Math.max.apply(
    Math,
    listItems.map(item => item.props.transaction.amount)
  );

  const maxPln = Math.max.apply(
    Math,
    listItems.map(item => item.props.transaction.pln)
  );

  const maxValueObject = listItems.filter(item => item.props.transaction.amount === maxEuro);
  const maxValueNameArr = maxValueObject.map(item => item.props.transaction.name);
  const maxName = maxValueNameArr.join(", ");

  function sumProperty(arr, type) {
    return arr.reduce((total, obj) => {
      return total + obj.props.transaction[type];
    }, 0);
  }

  let sumEuro = sumProperty(listItems, "amount");
  let sumPln = sumProperty(listItems, "pln").toFixed(2);

  return (
    <div className="row">
      <div className="col">
        <ul className="list-group">{listItems}</ul>
      </div>
      {listItems.length ? (
        <div>
          <MaxTransaction maxPln={maxPln} maxEuro={maxEuro} maxName={maxName} />
          <Sum sumEuro={sumEuro} sumPln={sumPln} />
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  transactions: state.transactions
});

export default connect(mapStateToProps)(TransactionList);
