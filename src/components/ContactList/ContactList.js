import React, { Component } from 'react'
import contacts from '../../contacts.json'

class ContactList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div class='contact-list'>
          {contacts}
          <ul>{this.props.contacts.map(contact => (
          <li>
            <Contact
              id={contact._id}
              name={contact.name}
              key={contact._id}
              email={contact.email}
              profilePicture={contact.profile_picture}
            />
          </li>
        ))}</ul>
      </div>
    )
  }
}

export default ContactList
