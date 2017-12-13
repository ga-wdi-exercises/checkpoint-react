import React, { Component } from 'react';

import Contact from '../Contact/Contact.js'
import './ContactList.css';

class ContactList extends Component {
  render() {
    let contacts = this.props.contacts.map((contact, i) => (
      <Contact key={i} contact={contact} />
    ))

    return (
      <div className="contact-list">
        {contacts}
      </div>

    )
  }
}

export default ContactList;
