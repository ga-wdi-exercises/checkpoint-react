import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <img>{contacts.profile_picture}</img>
                <h3>{contacts.name}</h3>
                <h4>{contacts.email}</h4>
            </div>
        );
    }
}

export default Contact;
