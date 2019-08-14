import React, { Component } from "react";

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>NewContact</h1>
        <form>
          <p>
            <label for="name">Name</label>
            <input type="text" name="name" />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="email" />
          </p>
          <p>
            <label for="profile_picture">Name</label>
            <input type="url" name="profile_picture" />
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </div>
    );
  }
}

export default NewContact;
