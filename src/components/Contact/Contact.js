import React, { Component } from "react";
import contactList from "./contacts.json";

class Contact extends Component {
  //   render() {
  //     return (
  // <div className='contact'>
  // <h3>name</h3>
  // <h4>email</h4>
  // <img>link</img>
  // </div>

  //     )
  //   }

  componentDidMount() {
    const symbol = this.props.match.params.symbol;
    const stock = listOfStock.filter(stock => stock.symbol === symbol)[0];
    this.props.setStock(stock);
  }

  render() {
    return (
      <div>
        <div>{this.props.stocks.name}</div>
        <div>{this.props.stocks.symbol}</div>
        <div>{this.props.stocks.lastPrice}</div>
        <div>{this.props.stocks.change}</div>
        <div>{this.props.stocks.high}</div>
        <div>{this.props.stocks.low}</div>
        <div>{this.props.stocks.open}</div>
      </div>
    );
  }
}

export default Contact;
