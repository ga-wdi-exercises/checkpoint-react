import React, { Component } from 'react'

class Contact extends Component {
  render() {
    let contact = this.props.contacts.filter(contact => {
      return contact._id === this.props.match.params.id
    })
    return (
      <div>
        <p>{contact}</p>
      </div>
    )
  }
}

export default Contact
