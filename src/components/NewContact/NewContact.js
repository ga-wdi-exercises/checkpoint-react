import React, { Component } from "react";

class NewContact extends Component {
  render() {
    return (
      <div className="new-contact">
        <h1>New Contact</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Profile Picture:
            <input type="file" name="image" />
          </label>
        </form>
      </div>
    );
  }
}

export default NewContact;
