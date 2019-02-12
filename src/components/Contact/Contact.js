import React, { Component } from 'react';

class Contact extends Component {
  render() {
    let contact = this.props.contacts.map( char => {
      return 
      // <h1>{char.name}</h1>
      // <h1>{char.email}</h1>
      // <img src={char.profile_picture} />
    })
    console.log(this.props.contacts)
    return (
      <div className='contact'>
    { contact }
      </div>
    );
  }
}

export default Contact;