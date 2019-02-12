import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ContactList extends Component {
    render() {
        return (
            <div className="contact-list">
                <Contact></Contact>
            </div>
        );
    }
}

export default ContactList;