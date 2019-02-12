import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header> 
          <nav>
            <Link to="/">Home</Link>
            <Link to="/new-contact">New Contact</Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
