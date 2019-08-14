import React, { Component } from 'react';
import Header from '../Header/Header'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      contacts: props.contacts
    }
  }
  render() {
    return <div className="App">
        <Header/>
        <p>app</p>
      </div>;
  }
}

export default App;