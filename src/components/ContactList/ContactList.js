import React, { Component } from 'react';
import contactList from '../../contacts.json'

class ContactList extends Component {

    render() {

        let list = contactList.map(contact => {
            return (
                <div class="contact-list">
                    <img src={contact.profile_picture}></img>
                    <h3>{contact.name}</h3>
                    <h4>{contact.email}</h4>
                </div>
            )
        })
        return (
            <div class="contact-list">
                {list}
                {/* {contacts.length} */}
            </div>
        )
    }
}

export default ContactList;


