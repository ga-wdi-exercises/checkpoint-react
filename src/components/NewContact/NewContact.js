import React, { Component } from "react";

export default class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <input id="name" type="text" onChange={this.handleChange} />
          <input id="email" type="text" onChange={this.handleChange} />
          <input
            id="profile_picture"
            type="text"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
