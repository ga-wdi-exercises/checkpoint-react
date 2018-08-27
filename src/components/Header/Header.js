import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  // Should render a <header> element with an <h1> and <nav> containing two React router <Link>s:
  // one to the homepage('/') and the other to create a new contact ('/new-contact)
  render() {
    return (
      <header>
        <h1>Contacts</h1>
        <nav>
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/new-contact">
            <h1>New Contact</h1>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
