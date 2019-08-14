import React, { Component } from "react";

class NewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      image: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <h1>New Contact</h1>
        </div>
        <div>
          <p>Name</p>
          <input
            className="name"
            type="text"
            name="name"
            name={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <p>Email</p>
          <input
            className="email"
            type="text"
            name="email"
            name={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <p>Image</p>
          <input
            className="image"
            type="text"
            name="image"
            name={this.state.name}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default NewContact;
