import React, { Component } from 'react'
import Contact from '../Contact/Contact'

export default class ContactList extends Component {
  render() {
    return (
      <div className="contact-list">
        {this.props.contacts.map((contact, i) => {
          return <Contact key={i} contact={contact} />
        })}
      </div>
    )
  }
}
