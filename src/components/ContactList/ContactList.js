import React, { Component } from "react";
import Contact from "../Contact/Contact";

class ContactList extends Component {
  render() {
    let newcontactlist = this.props.contacts.map(each => {
      return <Contact contacts={each} />;
    });
    return <div className="contact-list">{newcontactlist}</div>;
  }
}

export default ContactList;
