// renders a single contact
// contains outer<div> with class of contact and include an <img> for the profile picture
// should contain <h3> for the name
// should contain <h4> for the email address
import React, { Component } from "react";

class Contact extends Component {
  renders() {
    return (
      <div className="contact">
        <img src="">this is the image for profile</img>
        <h3>this should contain the name from props.contacts.name component</h3>
        <h4>
          this should contain the emaile from props.contacts.email component
        </h4>
      </div>
    );
  }
}

export default Contact;
