import React, { Component } from "react";

class ContactList extends Component {
  render() {
    let characters = this.props.driverData.map((characters, index) => {
      return (
        <div class="contact" key={index}>
          <img>{this.props.contacts.profile_picture}</img>
          <h3>{this.props.contacts.name}</h3>
          <h4>{this.props.contacts.email}</h4>
        </div>
      );
    });
    return <div>{characters}</div>;
  }
}

export default ContactList;
