import React, { Component } from 'react'

class ContactList extends Component {

  render() {
    let allContacts = this.props.contacts.map((contacts, index) => {
      return(
        <div className="all-contacts" key={index}>
          <img src={contacts.image} alt={contacts.name} />
          <h3>{contacts.name}</h3>
          <h4>{contacts.email}</h4>
        </div>
      )
    })
    return(
      <div className="contact-list">
        {allContacts}
      </div>
    )
  }

}

export default ContactList
