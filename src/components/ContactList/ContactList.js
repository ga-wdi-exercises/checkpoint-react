// Should render as homepage of app
// Render a <div> with class of contact list
// take contacts as a property(prop) and render <Contact> component for each contact object inside of the contacts prop

import React, { Component } from "react";
import Contact from "../Contact/Contact";
// import contacts from "../../contacts.json";

class ContactList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="contact-list">
        <Contact />
      </div>
    );
  }
}
// Question: how do you have the Contact List component take contacts as a prop and render the single Contact.

export default ContactList;
