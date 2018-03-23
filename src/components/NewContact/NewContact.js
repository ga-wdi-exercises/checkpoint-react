import React, { Component } from 'react';

class NewContact extends Component {
  render() {
    return (
      <div className="new-contact">
        <h1>New Contact</h1>
        <form action="submit" method="post">
          <label>
            name:
            <input type="text" name="name" />
            <br />
            email:
            <input type="text" name="email" />
            <br />
            profile_picture:
            <input type="text" name="profile_picture" />
            <br />
          </label>
        </form>
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
