import React, { Component } from "react";

export default class NewContact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      image: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form onSubmit={this.props.handleNewContact}>
          <p>
            <label htmlFor="name">Name</label> <br />
            <input type="text" name="name" onChange={this.handleChange} />
          </p>
          <p>
            <label htmlFor="email">Email</label> <br />
            <input type="email" name="email" onChange={this.handleChange} />
          </p>
          <p>
            <label htmlFor="image">Image</label> <br />
            <input type="url" name="image" onChange={this.handleChange} />
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </div>
    );
  }
}
