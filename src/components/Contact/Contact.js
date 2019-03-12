import React, { Component } from "react";

class Contact extends Component {
  render() {
    const singleContact = this.props.contacts.find(
      contact => contact.name === this.props.match.params.name
    );
    return (
      <div className="contact">
        <img src={singleContact.image} alt="" />
        <h3>({singleContact.name})</h3>
        <h4>{singleContact.email}</h4>
      </div>
    );
  }
}

export default Contact;
