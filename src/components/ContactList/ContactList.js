import React, { Component } from 'react'

class ContactList extends Component {
  render () {
    return (
      <div className='contact-list'>
        {
          this.props.contacts.map((contact, i) =>
            <div className='contact' key={i}>
              <img src={contact.profile_picture} alt={contact.name} />
              <h3>{contact.name}</h3>
              <h4>{contact.email}</h4>
            </div>
        )
        }
      </div>
    )
  }
}

export default ContactList
