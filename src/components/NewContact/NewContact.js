import React, { Component } from "react";

class NewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newContact: {}
    };
  }
  addAttribute(e) {
    this.setState({
      // Add attribute to contact
    });
  }
  render() {
    return (
      <div className="add-contact">
        <h2>New Contact</h2>
        <form onSubmit={e => this.handleNewContact(e)}>
          <input onChange={e => this.addAttribute(e)} name="profile_picture" />
          <input onChange={e => this.addAttribute(e)} name="name" />
          <input onChange={e => this.addAttribute(e)} name="email" />
          <input className="add-contact-button" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default NewContact;
