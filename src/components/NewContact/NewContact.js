import React, { Component } from "react";

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <input
            onChange={this.props.handleName}
            type="text"
            ref="name"
            placeholder="Whats the name "
          />
          <input
            onChange={this.props.handleEmail}
            type="email"
            ref="email"
            placeholder="Whats the email"
          />
          <input
            onChange={this.props.handleImage}
            type="text"
            ref="img"
            placeholder="Whats the image"
          />
          <input type="submit" onClick={this.props.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default NewContact;
