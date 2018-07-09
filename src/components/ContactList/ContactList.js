import React, { Component } from 'react'
import Contact from '../Contact/Contact'

class ContactList extends Component {
  render () {
    return (
      <div className='contact-list'>

        <Contact contacts={this.props.contacts} />

      </div>
    )
    }
}

export default ContactList
