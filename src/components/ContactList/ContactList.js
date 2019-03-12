import React, { Component } from "react";
import { Route } from "react-router-dom";
import contacts from "../../contacts.json";
import Contact from "../Contact/Contact";

class ContactList extends Component {
  render() {
    let contactsArray = contacts.map(contact => {
      return (
        <div className="contact-title" key={contact.name}>
          <Route
            path="/"
            render={props => <Contact contact={this.props.contacts} />}
          />
        </div>
      );
    });
    return <div>{contactsArray}</div>;
  }
}

export default ContactList;
