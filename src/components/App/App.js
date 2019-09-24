import React, { Component } from 'react';
import { Route } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      contacts: props.contacts
    }
  }
  render() { 
    return <div className="App">
        <div>app</div>
      
      </div>;
  }
}




export default App;