import React, { Component } from "react";
import { Link } from "react-router-dom";
import App from "../App/App";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/">
            <h1> Contact List </h1>
          </Link>
          <Link to="new-contact">
            <h1> New Contact </h1>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
