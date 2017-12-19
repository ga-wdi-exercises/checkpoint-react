import React, {Component} from 'react'

exports default class Contact extends Component {

  render() {
    let allContacts = this.props.contacts.map((contact, index) => {
      return(
        <div>
        <img src={contact.image} alt={contact.name}/>
        <h3>{contact.name}</h3>
        <h4>{contact.email}</h4>
        </div>
      )
    })
    return(
      <div>
        {allContacts}
      </div>
    )
  }
}
