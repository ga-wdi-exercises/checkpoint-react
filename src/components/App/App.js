import React, { Component } from 'react';
import Header from './../Header/Header'

class App extends Component {
  constructor() {
    super() 
    // this.state = {
    //   // where contacts is the array of contacts from contacts.json
    //   contacts: this.props.contacts
    // };
  }
  render() {
    return <div className="App">
            <Header />
          </div>;
  }
}

export default App;