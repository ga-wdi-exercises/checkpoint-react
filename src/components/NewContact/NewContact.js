import React, { Component } from "react";

class NewContact extends Component {
  

  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form onSubmit={this.makeContact}>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="profile_picture" />
        </form>
      </div>
    );
  }
}

export default NewContact;
