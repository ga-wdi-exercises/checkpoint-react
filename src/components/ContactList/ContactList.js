import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./ContactList.css";

class ContactList extends Component {
  render() {
    let list = this.props.contacts.map(contact => {
      return (
        <div className="card" key={contact.name}>
          <Link to={"/contact/" + contact.name}>
            <img src={contact.image} />
          </Link>
        </div>
      );
    });

    return (
      <div className="contact-list">
        <div className="Header">
          <h1>Contacts</h1>
          <Link to="/NewContact">
            <h3>Add a new contact</h3>
          </Link>
        </div>
        <main className="ContactList-main">{list}</main>
      </div>
    );
  }
}

export default ContactList;
