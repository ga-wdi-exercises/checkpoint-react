import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Contact</h1>

        <div className="flex">
          <Link to="/">
            Home
          </Link>
          <Link to="new-contact">
            New Contact
          </Link>
        </div>
      </div>

    )
  }
}

export default Header;
