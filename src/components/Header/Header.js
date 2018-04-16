import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new-contact">New Contact</Link>
        </nav>
      </div>
    );
  }
}

export default Header;

// Your <Header> component should render a <header>
//  element with an <h1> and a <nav> containing
//   two React Router <Link>s, one to the homepage ("/")
//   and the other to create a new contact ("/new-contact").
