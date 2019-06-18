import React, { Component } from 'react';
import Contact from '../Contact/Contact'
import contacts from "../../contacts.json"
class ContactList extends Component {
    
    render() {
        return (
            <div className="contact-list">
                <Contact>

                </Contact>
            </div>
        );
    }
}
export default ContactList;