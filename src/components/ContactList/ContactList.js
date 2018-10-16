import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'

class ContactList extends Component {
  render() {
    const { contacts } = this.props
    const contactList = contacts.map((contact, index) => {
      return (
        <div key={ index }>
          <Contact />
        </div>
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
