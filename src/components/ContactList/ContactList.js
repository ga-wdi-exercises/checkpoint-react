import React, { Component } from "react";
import Contact from "../Contact/Contact";
class ContactList extends Component {
  render() {
    let list = this.props.contacts.map((eachContact, key) => {
      return <Contact contact={eachContact} key={key} />;
    });
    return <div className="contact-list">{list}</div>;
  }
}

export default ContactList;
