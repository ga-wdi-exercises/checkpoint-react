import React, { Component } from 'react'
import '../../styles/index.css'
import Contact from '../Contact/Contact.js'



class ContactList extends Component {
  componentWillMount(){
    this.props.setRedirectFalse()
  }

  render() {

    return(
      <div className="contact-list">
        {this.props.contacts.map(contact => (
          <Contact key={contact.name} name={contact.name} email={contact.email} profile_picture={contact.profile_picture}/>
        ))}
      </div>
    )
  }
}


export default ContactList
