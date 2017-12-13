import React, { Component } from "react";
import Contact from "./../Contact/Contact";

class ContactList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    let contacts = this.props.contacts.map((contact, i) => {
      let pathname = `/`;
      return (
        <li className="contact" key={i}>
          {
            //contact.profile_picture} {contact.name} {contact.email
          }
          {<Contact contact={contact} />}
        </li>
      );
    });
    return (
      <div className="contacts">
        <ul className="contacts-list">{contacts}</ul>
      </div>
    );
  }
}

export default ContactList;
