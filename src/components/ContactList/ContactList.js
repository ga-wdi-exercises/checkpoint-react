import React, { Component } from "react";
import Contact from "../Contact/Contact";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts
    };
  }
  render() {
    return;
    <div className="contact-list">
      <Contact />
    </div>;
  }
}
export default ContactList;
