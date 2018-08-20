import React, { Component } from 'react';
import contacts from "../../contacts.json"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // where contacts is the array of contacts from contacts.json
      contacts: this.props.contacts
    }

  }
  render() {
    return <div className="App">
        <p>{contacts}</p>
      </div>;
  }
}

export default App;