import React, { Component } from "react";
import Contact from "../Contact/Contact.js";
import contacts from "../../contacts.json";

class ContactList extends Component {
  
  render() {
      let contacts = this.props.contacts.map((contacts, index) => {
         return (
            {contacts.name}
            {contacts.email}
         )
  }
}

export default ContactList;
