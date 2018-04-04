import React, { Component } from "react";

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="email" placeholder="email" />
          <input
            type="url"
            name="profile_picture"
            placeholder="profile_picture"
          />
        </form>
        <input type="submit" />
      </div>
    );
  }
}

export default NewContact;
