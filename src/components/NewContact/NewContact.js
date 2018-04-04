import React, { Component } from "react";
class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>

        <form onSubmit={this.props.onSubmit}>
          <p>
            <input type="text" name="name" />
          </p>
          <p>
            <input type="text" name="email" />
          </p>
          <p>
            <input type="text" name="profile_picture" />
          </p>
          <p>
            <input type="submit" value="Add New Contact" />
          </p>
        </form>
      </div>
    );
  }
}

export default NewContact;
