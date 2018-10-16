import React, { Component } from 'react';
import Contact from '../Contact/Contact.js'

class ContactList extends Component {
  render () {
    let contactList = this.props.contacts.map((contact, i) => {
      return (
        <Contact key={i} />
      )
    })
    return (
      <div className='contact-list'>
        {contactList}
      </div>
    )
  }
}

export default ContactList;