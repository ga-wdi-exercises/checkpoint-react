import React, { Component } from 'react';
import {
    Link,
    Route
  } from 'react-router-dom'
import NewContact from '../NewContact/NewContact.js'


class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Header: []
      };
    }

render() {
    return (
    <div className="App">
    <title>App</title>
    <nav>
    <h1>Contacts App</h1>
    <Link to="/"></Link>
    <Link to="/NewContact">New Contact</Link>
    </nav>
  </div>
    )
}
}

export default Header;