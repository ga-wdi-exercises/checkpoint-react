import React, { Component } from 'react'
import Contact from '../Contact/Contact';

export default class ContactList extends Component {
    render() {
        const theList = this.props.contacts.map(el => {
            return <Contact contacts={el} />
        })
        
        return (
            <div className="contact-list">
                {theList}
            </div>
        )
    }
}
