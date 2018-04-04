import React, { Component } from 'react'
import contacts from '../../contacts.json'

class ContactList extends Component {
  render() {
    let contacts = this.props.contacts
    return <div>{contacts}</div>
  }
}

export default ContactList
