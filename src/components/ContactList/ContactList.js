import React, { Component } from "react";

class ContactList extends Component {
  render() {
    let contacts = this.props.contacts.map((contact, key) => {
      return <p key={key}>{contact.name}</p>;
    });

    console.log(contacts.name);
    return <div className="contact-list">{contacts}</div>;
  }
}

export default ContactList;
