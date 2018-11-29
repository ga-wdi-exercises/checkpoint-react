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

  render() {
    return (
      <div>
        <h3>{this.props.contact}</h3>
        {this.props.stocks.name}
        <h4>email</h4>
        <img />
      </div>
    );
  }
}

export default Contact;
