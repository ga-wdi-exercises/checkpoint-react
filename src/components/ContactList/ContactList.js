import React, { Component } from 'react';
class ContactList extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="contact-list">

                {this.props.contacts}

            </div>
        );
    }
}

export default ContactList;