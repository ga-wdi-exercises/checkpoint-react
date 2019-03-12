import React, { Component } from "react";

class NewContact extends Component {
  render() {
    return (
      <div className="NewContact">
        <h1>Add a New Contact</h1>
        <form onSubmit={this.props.addContact}>
          <p>Name</p>
          <input type="text" name="name" onChange={this.props.changeHandler} />
          <p>eMail</p>
          <input type="text" name="email" onChange={this.props.changeHandler} />
          <p>Image</p>
          <input type="text" name="image" onChange={this.props.changeHandler} />
        </form>
      </div>
    );
  }
}

export default NewContact;
