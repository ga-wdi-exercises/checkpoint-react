import React, {Component} from 'react'
import Contact from '../Contact/Contact'


export default class ContactList extends Component {

  render () {
    let contact = this.props.contact.map((contact, index) => {
    return (
      <div class="contact">
        <img src="${contact.profile_picture}" alt="{contact.name}"/>
        <h3>{contact.name}</h3>
        <h4>{contact.email}</h4>
      </div>
    )
    })
    return (
      <div class="contact-list">
        {contact}
      </div>
    )
  }
}
