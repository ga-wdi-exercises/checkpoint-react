import React, { Component } from 'react';
import Contact from '../Contact/Contact';

class ContactList extends Component {

    render() {
        let contactList = this.props.contacts.map((contacts, i) => {
            return (
                <Contact contacts={this.props.contacts} key={i} />
            )
        })
        return(
            <div className='contact-list'>
                {contactList}
            </div>
        )
    }
}

export default ContactList;