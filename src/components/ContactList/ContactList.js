import React, { Component } from 'react';
import Contact from '../Contact/Contact'
import { Link } from 'react-router-dom';

class ContactList extends Component {
    render() {
        let contacts=this.props.contacts.map((contact, index) => {
            return(
                <div className="contact-list">
                    <Link to={contact.name} >
                        <Contact key={index} contact={this.props.contacts}/>
                    </Link>
                </div>
            )    
        });
        return(<div>{contacts}</div>)
    }
};

export default ContactList