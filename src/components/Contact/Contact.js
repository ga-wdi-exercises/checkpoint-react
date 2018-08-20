import React, { Component } from 'react'

class Contact extends Component {
  render () {
    let contact = this.props.contacts.find((contact) => contact.name === this.props.match.name)
    return (
      <div className='contact'>
        <img src={'contact.profile_picture'} />
        <h3>{contact.name}</h3>
        <h4>{contact.email}</h4>
      </div>
    )
  }
}

export default Contact
