import React, { Component } from "react";

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Profile Picture:
            <input type="image" name="profilepic" />
          </label>
        </form>
      </div>
    );
  }
}

export default NewContact;
