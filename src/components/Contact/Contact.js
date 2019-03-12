import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <img src={contacts.profile_picture} />
                <h3>{contacts.name}</h3>
                <h4>{contacts.email}</h4>
            </div>
        );
    }
}

export default Contact;
