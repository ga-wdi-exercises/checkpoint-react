import React, { Component } from 'react';
import Contact from '../Contact/Contact'

class ContactList extends Component {
    constructor(props){
        super(props)
        this.state = { contactList: this.props.contacts }
    }

    render() {
        const displayList = this.state.contactList.map(contact => <Contact info={contact}/>)
        return (
            <div className="contact-list">
                {displayList}
            </div>
        );
    }
}

export default ContactList;