// renders a single contact
// contains outer<div> with class of contact and include an <img> for the profile picture
// should contain <h3> for the name
// should contain <h4> for the email address
import React, { Component } from "react";

class Contact extends Component {
  renders() {
    return (
      <div className="contact">
        <img src={this.props.profile_picture} alt="profile" />
        <h3> {this.props.name}</h3>
        <h4> {this.props.email}</h4>
      </div>
    );
  }
}

export default Contact;
