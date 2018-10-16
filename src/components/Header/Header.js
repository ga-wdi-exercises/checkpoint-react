import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1> Header </h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/new-contact">New Contact</Link>
          </nav>
        </header>
        <p>app</p>
      </div>
    );
  }
}
export default Header;
