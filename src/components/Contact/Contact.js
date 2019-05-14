import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className='contact'>
          <img src={this.state.profile_picture} alt='contact'>
            {this.state.profile_picture}
          </img>
          <h3>{this.state.name}</h3>
          <h4>{this.state.email}</h4>
        </div>
      </div>
    )
  }
}

{
  /* <Contact>
Your <Contact> component will render a single contact.

It should render:

An outer <div> with a class of contact
An include an <img> for the profile_picture,
<h3> for the name
<h4> for the email. */
}
