import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>
          <nav>
            <Link to='/'>
            Home</Link>
            <Link to='/new-contact'>
            New Contact</Link>
          </nav>
        </h1>
      </div>
    );
  }
}

export default Header;