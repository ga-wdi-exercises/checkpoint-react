import React, { Component } from 'react';

class ContactList extends Component {
    constructor (props) {
        super(props);

        Contact = {this.state.contacts}
        }

      }
  render() {
    return (
      <div className="contact-list">
        <Contact />
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
