import React, { Component } from 'react';
import Contact from '../Contact/Contact'

class ContactList extends Component {
  
    render() {
        let list = this.props.contacts.map(contact => {
            return (
                <Contact key={contact.name}/>
            )
        })
        return (
            <div className="contact-list" > 
              {list}  
            </div>
            )
        }
    }

export default ContactList; 