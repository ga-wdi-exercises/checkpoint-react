import React, { Component } from 'react';
import ContactList from '../ContactList/ContactList'

class Contact extends Component {
render() {
  const { contacts } = this.props
  const contactList = contacts.map((contact, index) => {
  return (
    <div className="contact">
      <img src={contact.profile_picture} alt={contact.name}/>
      <h3>{contact.name}</h3>
      <h4>{contact.email}</h4>
    </div>
  )
})
return (
  {contactList}
)
}
}

export default Contact;
