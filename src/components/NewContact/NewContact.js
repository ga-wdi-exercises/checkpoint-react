import React, { Component } from "react";

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <input type="text" placeholder="name" value="" />
        <input type="email" placeholder="email" value="" />
        <input type="text" placeholder="profile picture" value="" />
      </div>
    );
  }
}

export default NewContact;
