import React, { Component } from 'react';
import Contact from '../Contact/Contact';

class ContactList extends Component {
    constructor(props) {
        super()

        this.state = {}

    }
    render() {
        // let allToons = []; 

        return (
            <div className="contact-list">
                <Contact allToons={this.props.contacts}/>
                {/* {this.props.contacts.map((contact) => {
                     return <Contact name={contacts.name} />  */}
      })}
                
            </div>
        );
    }
}

export default ContactList;