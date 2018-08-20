import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <h1 />
        <nav>
          <Link to="/">
            <h1>Home Page</h1>
          </Link>
          <Link to="/new-contact" />
        </nav>
      </div>
    );
  }
}

export default Header;
