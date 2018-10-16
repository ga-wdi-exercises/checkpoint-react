import React, { Component } from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tweety",
      email: "tweety@gmail.com",
      profile_picture:
        "https://upload.wikimedia.org/wikipedia/en/0/02/Tweety.svg"
    };
  }
  render() {
    return (
      <div className="Contact">
        <img src={contact.profile_picture} />
        <h3>{contact.name}</h3>
        <h4>{contact.email}</h4>
      </div>
    );
  }
}

export default Contact;
