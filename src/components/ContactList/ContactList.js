import { Route, Link, Redirect, Switch } from "react-router-dom";
import React, { Component } from 'react'
import Contacts from '../../contacts.json'

class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Contacts: Contacts
    }
  }
  render() {
    let contacts = this.state.Contacts.map((contact, i) => {
      return (
        <li key={i}>
          <div> <img src={contact.profile_picture} /> {contact.name} {contact.email} </div>
         </li>
      )
    })
    return (
      <div className="contact-list">
        <h2>Contacts</h2>
        <ul>
          {contacts}
        </ul>
      </div>
    );
  }
}


export default ContactList;
