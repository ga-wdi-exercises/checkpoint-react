import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  // is this needed if no state?
  constructor() {
    super();
  }
  // Should render a <header> element with an <h1> and <nav> containing two React router <Link>s:
  // one to the homepage('/') and the other to create a new contact ('/new-contact)
  render() {
    return (
      <header>
        <h1>Contacts</h1>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/new-contact"}>New Contact</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
