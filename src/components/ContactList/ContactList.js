import React, { Component } from 'react';
import Contact from '../Contact/Contact'

class ContactList extends Component {
    render() {
        if (this.props.contacts) {
            let contactList = this.props.contacts.map(cv => {
                return (
                    <div key={cv._id} className='contact-list'>
                        <p>{cv.name}</p>
                        <p>{cv.email}</p>
                        <img src={cv.profile.picture} alt={cv.name} />
                    </div>
                )
            })
            return (
                <div className='contact-list'>
                    {contactList}
                </div>
            );
        }
    }
}

export default ContactList;

