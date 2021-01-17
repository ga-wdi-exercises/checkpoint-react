import React, { Component } from "react";

class NewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      profile_picture: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
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
            type="text"
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <p>profile_picture</p>
          <input
            className="profile_picture"
            type="text"
            name="profile_picture"
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

export default NewContact;
