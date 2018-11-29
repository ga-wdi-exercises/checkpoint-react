import React, { Component } from 'react';
import { format } from 'util';

let contact = {
    name: "Tweety",
    email: "tweety@gmail.com",
    profile_picture: "https://upload.wikimedia.org/wikipedia/en/0/02/Tweety.svg"
};

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <img src={contact.profile_picture}></img>
                <h3 class="contact">{contact.name}</h3>
                <h4>{contact.email}</h4>
            </div>
        )
    }
}

export default Contact;
