import React, { Component } from "react";
import contacts from "../../contacts.json";
import Contact from '../Contact/Contact.js'

class ContactList extends Component {
  render() {
    return (
      <div className="contact-list">
        <Contact {...contacts} />
      </div>
    );
  }
}

export default ContactList