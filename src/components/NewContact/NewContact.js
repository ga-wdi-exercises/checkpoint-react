import React, { Component } from "react";

class NewContact extends Component {
  goHomeViaHistory = () => {
    this.props.history.push("/");
  };
  makeNewContact = e => {
    e.preventDefault();
    this.goHomeViaHistory();
    const newContact = {
      name: e.target.name.value,
      email: e.target.email.value,
      profile_picture: e.target.profile_picture.value
    };
    return this.props.makeNewContact(newContact);
  };
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form onSubmit={this.makeNewContact}>
          <p>Name</p>
          <input name="name" />
          <p>Email</p>
          <input name="email" />
          <p>Image</p>
          <input name="profile_picture" />
          <p>
            <input className="submit-button" type="submit" value="Submit" />
          </p>
        </form>
      </div>
    );
  }
}

export default NewContact;
