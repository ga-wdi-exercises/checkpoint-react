// should render <h1> with text of New Contact
// should render a form for name, email, and profile-picture
// on submit(or onClick) save the new contact:
// save by updating state inside of <App> and re-direct back to homepage/list of contacts
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
            Email:
            <input type="text" name="email" />
            Profile-picture:
            <input type="text" name="image" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewContact;
