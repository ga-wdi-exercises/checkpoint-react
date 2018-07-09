import React, { Component } from 'react'
import Contact from '../Contact/Contact'

class ContactList extends Component {
  render () {
    for (var i = 0; i < this.props.contacts.length; i++) {
      // render () {
      return (
        <Contact contacts={this.props.contacts} />
      )
      // }
    }
    return (
      <div className='contact-list'>
                HelloWorld
      </div>
    )
  }
}

export default ContactList
