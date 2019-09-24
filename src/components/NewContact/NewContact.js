import React, { Component } from "react";

class newContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      profile_picture: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit() {
    this.props.updateCharacters(this.state);
  }

  render() {
    return (
        <form>
        <div>
          <h1>New Contact</h1>
        </div>
        <div>
          <p>Name</p>
          <input
            className="name"
            type="text"
            name="name"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <p>Email</p>
          <input
            className="email"
            className="profile_picture"
            type="text"
            name="email"
            name={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <p>Image</p>
          <input
            className="image"
            type="text"
            name="image"
            name={this.state.image}
            onChange={this.handleChange}
          />
        </div>
        <input
          className="submit"
          type="submit"
          value="Submit"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}

export default newContact;