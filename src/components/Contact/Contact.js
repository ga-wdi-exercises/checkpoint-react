import React, { Component } from "react";

class Contact extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    let contact = this.props.contact;
    return (
      <div>
        <img src={contact.profile_picture} alt={contact.name} />
        <p>{contact.name}</p>
        <p>{contact.email}</p>
      </div>
    );
  }
}

export default Contact;
