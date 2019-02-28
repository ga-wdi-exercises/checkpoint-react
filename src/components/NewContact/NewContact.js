import React, { Component } from "react";

class NewContact extends Component {
  constructor() {
    super();
    this.state = {
      newPerson: { name: "", email: "", image: "" }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
    console.log(this.state.name);
  }
  handleSubmit(evt) {
    this.state;
  }
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <label>
            Name:
            <br />
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Email:
            <br />
            <input type="email" name="email" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Profile Picture:
            <br />
            <input type="img" name="img" onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewContact;

// Your <NewContact> component should render an <h1> with a text of New Contact and a form with inputs for the name, email and profile_picture.

// When submitted, you should save the new contact by updating your state inside of <App> and direct the user back to the homepage/list of contacts.
