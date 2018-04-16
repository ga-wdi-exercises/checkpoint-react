import React, { Component } from 'react';

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <input type="text" placeholder="character" name="name" />
          <br />
          <input type="text" placeholder="email" name="email" />
          <br />
          <input type="url" placeholder="pic" name="profile_picture" />
        </form>
        <input type="submit" />
      </div>
    );
  }
}

export default NewContact;

// Your <NewContact> component should render an <h1>
// with a text of New Contact and a form with inputs for
// the name, email and profile_picture.

// When submitted, you should save the new
// contact by updating your state inside of
// <App> and direct the user back to the
//      homepage/list of contacts.
