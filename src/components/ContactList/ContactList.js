import React, { Component } from 'react';
import Contact from "../Contact/Contact"

class ContactList extends Component {
    render() {
        return (
            <div className="contact-list">
            <Contact>
            {this.props.name}    
            {this.props.email}
            {this.props.profile_picture}
            </Contact>
          </div>
        );
    }
}

export default ContactList;