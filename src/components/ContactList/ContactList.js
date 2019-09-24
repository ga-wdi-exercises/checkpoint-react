

import React, { Component } from 'react';
import ContactData from "../../contacts.json"


class ContactList extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
             {ContactData.map(contact, index => {
                return  <div>

                <Contacts /> 
    
                
                <div className="contact-list" />
                </div>
            }
                
        }


        )

    }
}


export default ContactList;



