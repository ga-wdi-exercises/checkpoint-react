import React, { Component } from "react";
import contactList from "./contacts.json";

class ContactList extends Component {
  render() {
    let contacts = contactList.map(contact => {
      return (
        <div className="contact" key={contact.name}>
          <div className="contactlist">
            <div>{contact.name}</div>
            <div>{contact.email}</div>
            <div>{contact.profile_picture}</div>
          </div>
        </div>
      );
    });
  }
}

export default ContactList;
