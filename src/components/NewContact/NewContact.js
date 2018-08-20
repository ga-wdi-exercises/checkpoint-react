import React, { Component } from "react";

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1 />
        <form>
          <input type="text" name="name" />
          <input type="text" name="email" />
          <input type="text" name="image" />
        </form>
      </div>
    );
  }
}

export default NewContact;
