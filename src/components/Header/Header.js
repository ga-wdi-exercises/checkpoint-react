import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
        <h1></h1> 
        <nav>
          <Link to="/"><div>Home</div></Link>
          <Link to="/new-contact"><div>New Contact</div></Link>
        </nav>
      </header>
    );
  }
}

export default Header;