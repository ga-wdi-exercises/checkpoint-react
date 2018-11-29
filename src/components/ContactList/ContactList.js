import React, { Component } from "react";

class ContactList extends Component {
  render() {
    let list = this.props.contacts.map(contact => {
      return (
        <div key={contact.email}>
          <p>{contact.name}</p>
        </div>
      );
    });
    return <div>{list}</div>;
  }
}

export default ContactList;
