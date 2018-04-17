import React, { Component } from 'react';
import Contact from '../Contact/Contact';

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
// Your <ContactList> component should render as the
// homepage of your app. It should render a <div> with
// a class of contact-list.
// It should take contacts as a prop and render a
// <Contact> component for each contact object
// inside of the contacts prop.
