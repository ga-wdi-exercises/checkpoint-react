import React, { Component } from 'react';
import Contact from '../Contact/Contact'

class ContactList extends Component {
    render() {
        let contacts = []
        for (let i=0; i < this.props.contact; i++) {
            contacts.push(<Contact />)
        }
        return(
            <div className='contact-list'>
                {contacts}
            </div>
        );
    }
}

export default ContactList;