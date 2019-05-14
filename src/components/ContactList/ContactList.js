import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

class ContactList extends Component {
  render() {
    let myContacts = this.props.contacts.map((contact, index) => {
      return (
        <Link to="/">
          <p key={index}>Name: {contact.name}</p>
        </Link>
      );
    });
    return <div>{myContacts}</div>;
  }
}

export default ContactList;
