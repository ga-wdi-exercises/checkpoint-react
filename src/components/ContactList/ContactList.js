import { Route, Link, Redirect, Switch } from "react-router-dom";
import React, { Component } from 'react'

class ContactList extends Component {
  render() {
    let contacts = this.props.contacts.map((contact, i) => {
      let path = `/*/${contact.symbol}`
      return (
        <li key={i}>
           {contact.name} <Link to={path}>{contact.symbol}</Link>
         </li>
      )
    })
    return (
      <div class="contact-list">
        <h2>Contacts</h2>
        <ul>
          {contacts}
        </ul>
      </div>
    );
  }
}


export default ContactList;
