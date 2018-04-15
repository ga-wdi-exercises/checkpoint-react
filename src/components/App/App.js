import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Contact Manager</h1>
        <Link to="/ContactList"> Home </Link>
        <Link to="/NewContact"> New Contacts </Link>
      </div>
    );
  }
}

export default App;
