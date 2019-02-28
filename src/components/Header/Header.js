import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Header extends Component {
  
  render() {
    return <Header>
      	  <h1>Contacts</h1>
    	  <nav>
      		<Link to="/">Home</Link>
      		<Link to="/new-contact">New Contact</Link>
      	  </nav>
      	</Header>;
  }
}

export default Header;