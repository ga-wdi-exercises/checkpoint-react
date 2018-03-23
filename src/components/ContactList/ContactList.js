import React, { Component } from "react";

class ContactList extends Component {
  render() {
    let contacts = this.props.contact.map((contact, index) => {
      return (
        <li key={index}>
          {" "}
          <img src={contact.profile_picture} /> <p>{contact.name}</p>
          <p>{contact.email}</p>
        </li>
      );
    });
    return <div>{contacts}</div>;
  }
}

export default ContactList;
