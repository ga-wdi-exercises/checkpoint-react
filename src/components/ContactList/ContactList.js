import React, { Component } from 'react'
import  Contacts from '../Contact/Contact.js'

class ContactList extends Component {
    constructor (props) {
      super(props)
  
      this.state = {
        contacts: []
      }
    }
    render() {
        var contacts = this.state.contacts.map((contacts, i) => {
            return (
                <div key= {i}>
                <Contacts info = {contact} />
                </div>            
            )
        }
        return(
        <div className='contact-list'>
           {contacts}
        </div>
        )
    }

export default ContactList
