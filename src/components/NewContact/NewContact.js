import React, { Component } from 'react';

class NewContact extends Component {
  render() {
    return (
      <div>
        <h2>New contact</h2>
        <input type="name" placeholder="name" required />
        <br />
        <input type="email" placeholder="email" required />
        <br />
        <input type="profile_picture" placeholder="Profile_picture" required />
        <br />
        <input type="submit" value="Submit" onClick={this.props.AddContacts} />
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
