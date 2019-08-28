import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div class="contact">
        <img>{this.props.contacts.profile_picture}</img>
        <h3>{this.props.contacts.name}</h3>
        <h4>{this.props.contacts.email}</h4>
      </div>
    );
  }
}

export default Contact;
