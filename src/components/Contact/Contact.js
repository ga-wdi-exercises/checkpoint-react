import React, { Component } from 'react'

// Your <Contact> component will render a single contact.

// It should render:

//  // An outer <div> with a class of contact
//  // An include an <img> for the profile_picture,
//  // <h3> for the name
//  // <h4> for the email.

class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <img
          src={`${this.props.contact.profile_picture}`}
          alt={`${this.props.contact.name}`}
        />
        <h3>{this.props.contact.name}</h3>
        <h4>{this.props.contact.email}</h4>
      </div>
    )
  }
}

export default Contact
