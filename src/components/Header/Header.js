import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/new-contact">NEW CONTACT</Link>
        </nav>
      </div>
    )
  }
}

export default Header;
