import React, { Component } from 'react'
import {
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

import Contact from '../Contact/Contact'

class ContactList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      contacts: this.props.contacts
    }
  }

  render () {
    let showContacts = this.state.contacts.map((contact, index) => {
      return (
        <div key={index}>
          <li>
            <Link to={`/contacts/${contact.name}`}>{Contact}</Link>
          </li>
        </div>
      )
    })

    return(
      <div className="contact-list">
        {showContacts}
      </div>
    )
  }
}

export default ContactList
