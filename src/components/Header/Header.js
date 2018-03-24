import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        <h1>Contacts</h1>
        <Link to="/">Home</Link>
        <Link to="/new-contact">New Contact</Link>
      </nav>
    );
  }
}

export default Header;
