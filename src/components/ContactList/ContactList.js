import React, { Component } from 'react'
import Contact from '../Contact/Contact'
import { throws } from 'assert';

class ContactList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contacts: this.props.contacts
        }
    }
    render() {
        return (
            <div>
                {this.state.contacts.map(contact => {
                    <Contact contact={contact}
                })}
            </div>
        )
    }
}
export default ContactList