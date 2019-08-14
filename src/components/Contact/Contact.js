import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact" key={contact.name}>
                <img src={contact.image} alt={contact.name}></img>
                <h3>{contact.name}</h3>
                <h4>{contact.email}</h4>
            </div>
        )
    }
}

export default Contact;