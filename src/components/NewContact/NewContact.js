import React, { Component } from "react";

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <input placeholder="name" />
        <input placeholder="email" />
        <input placeholder="upload profile pic" />
      </div>
    );
  }
}

export default NewContact;
