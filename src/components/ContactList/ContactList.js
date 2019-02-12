import React, { Component } from 'react';
import Contact from '../Contact/Contact'

class ContactList extends Component {
  render() {
    console.log(this.props)

    let contactList = this.props.contacts.map(contact => {
      return (
        <Contact {...this.props}/>
      )
    })
    return (
      <div className='contact-list'>
        <h1>
          { contactList }
        </h1>
      </div>
    );
  }
}

export default ContactList;