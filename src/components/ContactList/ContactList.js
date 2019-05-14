import React, { Component } from 'react'
import Contact from '../Contact/Contact'

export default class ContactList extends Component {
  render() {
    let allContacts = this.props.contacts.map((contact, idx) => {
      return <Contact contact={contact} key={idx} />
    })
    return <div className='contact-list'>{allContacts}</div>
  }

  /* <ContactList>
  <ContactList> should take contacts as a prop

  It should render:

  A <Contact> component for each contact object inside of the contacts prop.
  A <div> with a class of contact-list. */
}
