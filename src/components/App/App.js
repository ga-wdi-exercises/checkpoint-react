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
        <p>app</p>
      </div>
    );
  }
}

export default App;
