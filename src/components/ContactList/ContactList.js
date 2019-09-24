import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact"

class ContactList extends Component {
    render() {
        let contacts = this.props.contacts.map((contact, i) => {
            return(
                <Contact contact={contact} />
            );
        })
        return( 
          <div>
              <h1>Contacts</h1>
              <div className="contact-list">{contacts}</div>
          </div>
        )
    }
}

export default ContactList