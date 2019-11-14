import React, { Component } from "react";
import ListItem from "./ListItem";
import MaxTransaction from "./MaxTransaction";
import Sum from "./Sum";

class List extends Component {
  render() {
    const listItems = this.props.list.map((elem, i) => (
      <ListItem
        key={i}
        name={elem.name}
        amount={elem.amount}
        pln={elem.pln}
        removeItem={() => this.props.removeItem(i)}
      />
    ));

    const maxEuro = Math.max.apply(Math, listItems.map(item => item.props.amount));
    const maxPln = Math.max.apply(Math, listItems.map(item => item.props.pln));
    const maxValueObject = listItems.filter(item => item.props.amount === maxEuro);
    const maxValueNameArr = maxValueObject.map(item => item.props.name);
    const maxName = maxValueNameArr.join(", ");

    function sumProperty(arr, type) {
      return arr.reduce((total, obj) => {
        return total + obj.props[type];
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
  }
}

export default List;
