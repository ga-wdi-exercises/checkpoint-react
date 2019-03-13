import React, { Component } from 'react';
class Contact extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className='contact'>
                <img>{this.contact.img}</img>
                <h3>Name: {this.contact.name}</h3>
                <h4>Email: {this.contact.email}</h4>
            </div>
        );
    }
}

export default Contact;