import React, { Component } from 'react';
import Contact from '../Contact/Contact'
class ContactList extends Component {
    render() {
        return (
            <div className="contact-list">
                {this.props.contacts.map((data, index) => {
                    return (
                        <div>
                        <Contact index={index}
                         name={data.name}
                         email={data.email}
                         profilePicture={data.profile_picture} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ContactList;