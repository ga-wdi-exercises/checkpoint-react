import React, { Component } from 'react'
import Contact from '../Contact/Contact'

class ContactList extends Component {
  render () {
    var contacts = this.props.contacts
    console.log(contacts)
    return (
      <div className='contact-list'>
        {contacts.map((contact) => {
          return (
            <Contact contact={contact} />
          )
        })}
      </div>
    )
  }
  }

export default ContactList
