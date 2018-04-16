import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <div className="contact-list">
        {this.props.contacts.map(qt => {
          return (
            <div className="contact-listlist">
              <img src={qt.profile_picture} alt="id-pic" />
              <h3>{qt.name}</h3>
              <h3>{qt.email}</h3>
            </div>
          );
        })}
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
