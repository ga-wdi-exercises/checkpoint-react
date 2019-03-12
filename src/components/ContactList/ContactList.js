import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactList extends Component {
    render() {
        let list = this.props.contacts.map(contacts => {
            return (
                <div className="con" key={contacts.name}>
                    <Link to={'/contacts/' + contacts.name}>
                        <img src={contacts.profile_picture} />
                    </Link>
                </div>
            );
        });
        return (
            <div className="contact-list">
                <main>{list}</main>
            </div>
        );
    }
}

export default ContactList;

{
    /* <ContactList> should take contacts as a prop

It should render:

A <Contact> component for each contact object inside of the contacts prop.
A <div> with a class of contact-list. */
}
