import React, { Component } from 'react';
import information from '../../contacts.json'

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h3>name</h3>
                <h4>email</h4>
            </div>
        );
    }
}

export default Contact;