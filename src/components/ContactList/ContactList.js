import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import Contact from "../Contact/Contact"

class ContactList extends Component {
  render() {
      let contactList = this.props.contacts.map((contact) => {
        return(
          <div class="contact-list">
            <h1>{contact.name}</h1>
            <h3>{contact.email}</h3>
            <img src={contact.profile_picture}/>
          </div>
        )
      })

      return(
        <div>
          {contactList}
        </div>
      )
    }
}

export default ContactList
