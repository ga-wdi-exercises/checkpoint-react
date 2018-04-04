import React, { Component } from "react";
import Contact from "../Contact/Contact";

class ContactList extends Component {
  render() {
    return (
      <div className="contact-list">
        {this.props.contacts.map(contact => (
          <Contact key={contact.name} {...contact} />
        ))}
      </div>
    );
  }
}

export default ContactList;
