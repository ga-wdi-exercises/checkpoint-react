import React, { Component } from 'react'
import Contact from '../Contact/Contact'


export default class ContactList extends Component {
    render() {
        let contactComponents = this.props.contacts.map((contact, index) => {
            return <Contact contact={contact} key={index}/>
        })
        return (
            <div className="contact-list">
                {contactComponents}
            </div>
        )
    }
}
