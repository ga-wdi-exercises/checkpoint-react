

import React, { Component } from 'react';
import Contacts from "../Contact/Contact"


class ContactList extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (

            <div>
            <Contacts /> 

            
            <div className="contact-list" />
            </div>


        )

    }
}


export default ContactList;



