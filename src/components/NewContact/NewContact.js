import React, { Component } from 'react';

class NewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let contacts = this.state.contacts;
    let newContact = {
      name: this.state.name,
      email: this.state.email,
      profile_picture: this.state.profile_picture
    };
    contacts.push(newContact);
  }
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input type="text" placeholder="character" name="name" />
          <br />
          <input type="text" placeholder="email" name="email" />
          <br />
          <input type="url" placeholder="pic" name="profile_picture" />
          <input type="submit" />
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
