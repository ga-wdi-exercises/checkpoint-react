import React, { Component } from 'react'
import Contact from '../Contact/Contact'
class ContactList extends Component {
  render () {
    return (
      <div>
        {this.props.contacts.map((contact, i) => {
          return <Contact contact={contact} key={i} />
        })}
      </div>
    )
  }
}

export default ContactList
