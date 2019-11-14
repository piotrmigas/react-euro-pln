import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getRate, handleNameChange, handleAmountChange } from "./redux/dataActions";
import AddTransaction from "./components/AddTransaction";
import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    };
  }

  componentDidMount() {
    this.props.getRate();
  }

  updatedLocalStorage = updatedList => {
    localStorage.setItem("transactions", JSON.stringify(updatedList));
  };

  add = e => {
    e.preventDefault();
    const newList = [
      {
        name: this.props.name,
        amount: this.props.amount,
        pln: +(this.props.amount * this.props.rate).toFixed(2)
      },
      ...this.state.list
    ];

    this.setState({ list: newList, name: "", amount: "" });
    let updatedList = this.state.list;
    updatedList = newList;
    this.setState({ list: updatedList });
    this.updatedLocalStorage(updatedList);
  };

  remove = index => {
    this.setState({
      list: this.state.list.filter((e, i) => i !== index)
    });
    let updatedList = this.state.list;
    updatedList = updatedList.filter((e, i) => i !== index);
    this.setState({ list: updatedList });
    this.updatedLocalStorage(updatedList);
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center">1 EUR = {this.props.rate} PLN</h3>
        <AddTransaction
          handleNameChange={this.props.handleNameChange}
          handleAmountChange={this.props.handleAmountChange}
          addItem={this.add}
          name={this.props.name}
          amount={this.props.amount}
        />
        <List list={this.state.list} removeItem={this.remove} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rate: state.rate,
  name: state.name,
  amount: state.amount
});

const mapActionsToProps = {
  handleNameChange,
  handleAmountChange,
  getRate
};

export default connect(mapStateToProps, mapActionsToProps)(App);
