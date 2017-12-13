import React, { Component } from 'react'
import axios from 'axios'
import Contacts from '../../contacts.json'
import {
  Route
} from 'react-router-dom'

class ContactList extends Component {
  constructor () {
    super()
    this.state = {
      Contacts: Contacts
    }
  }

  render () {
    return (
      <div className="contact-list">
        <Route
          path="#"
          render= { Contact } />
      </div>
    )
  }
}

export default ContactList
