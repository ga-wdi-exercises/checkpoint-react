import React, { Component } from "react";
import contactList from "../../contacts.json";
import { Link } from "react-router-dom";

class Contacts extends Component {
  render() {
    let contactComponents = this.state.contactList.map((contacts, index) => {
      return (
        <Link to={`/contact`} key={index}>
          {contactList.name}
        </Link>
      );
    });
  }
}
