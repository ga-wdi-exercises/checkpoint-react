import React, { Component } from "react";

class NewContact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      profile_picture: ""
    };

    this.handleName = this.handleName.bind(this);
  }
  handleName(evt) {
    this.setState({ name: evt.target.value });
  }
  render() {
    console.log(this.props.contacts);

    return (
      <div>
        <h1>New Contact</h1>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleName}
          placeholder=" Name"
        />
      </div>
    );
  }
}

export default NewContact;
