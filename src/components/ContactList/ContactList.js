import React from 'react'
import Contact from '../Contact/Contact'

const ContactList = ({ contacts }) => {
  let displayContacts = contacts.map(contact => {
    return <Contact contact={contact} />
  })
  return <div className="contact-list">{displayContacts}</div>
}

export default ContactList
