import React, { Component } from 'react';
import Contact from "../Contact/Contact"

class ContactList extends Component {

    render() {
    const contacts = this.props.contacts.map(contact => {
        return <Contact contact={contact} key={contact.email}/>
    })
        return (
            <div className="contact-list">
                {contacts}
            </div>
        );
    }
}

export default ContactList;