import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class ContactList extends Component {
    constructor() {
        super()

    }


    render() {
        return (
            <div>
                <h1>{this.props.contacts}</h1>
                <Contact />
                <div className="contact-list">

                </div>
            
            </div>
        )
    }

}

export default ContactList; 





