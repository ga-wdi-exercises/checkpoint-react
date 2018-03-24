import React, { Component } from "react";
import Contact from "../Contact/Contact";

class ContactList extends Component {
  render() {
    return (
      <div className="contact-list">
        {this.props.contacts.map((contact, index) => {
          return <Contact key={index} contact={contact} />;
        })}
      </div>
    );
  }
}

export default ContactList;
