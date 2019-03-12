import React, { Component } from "react";

class Contact extends Component {
  render() {
    let contactArray = this.props.contacts.filter(
      contact => contact.name == this.props.match.params.name
    );
    let contact = contactArray[0];

    return (
      <div className="contact">
        <div className="profile_picture">
          <img src={contact.image} />
        </div>
        <div className="Contact-info">
          <h3>{contact.name}</h3>
          <h4>
            <span>({contact.email})</span>
          </h4>
        </div>
      </div>
    );
  }
}

export default Contact;
