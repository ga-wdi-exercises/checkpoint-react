import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor ()  {
    super ()
      this.state = {
        contacts: this.props.contacts
      }
  }
  
  render() {
    return <div className="App">
        <p>app</p>
      </div>;
  }
}

export default App;