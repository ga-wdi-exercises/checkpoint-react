import React, { Component } from 'react';
import contacts from '../../contacts.json'

class ContactList extends Component {
    // constructor(){
    //     super(props)
    //     this.state ={ 
    //         contactList: {
    //             contacts
    //         }
    //     }
    // }
  render() {
    
    return (
    <div className="contact-list">
        <ul>
           {this.props.contacts}
        </ul>
       
      </div>
      )
  }
}

export default ContactList;