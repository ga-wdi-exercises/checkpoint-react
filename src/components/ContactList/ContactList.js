import React, { Component } from 'react';
import Contact from "../Contact/Contact";

class ContactList extends Component {
      render() {
        let cl = this.props.contacts.map((singleContact, key) => {
          return <Contact contact={singleContact} key={key} />
        })
          return (
            <div className="contact-list">
              {cl}
            </div>
          )
      }
}

export default ContactList;