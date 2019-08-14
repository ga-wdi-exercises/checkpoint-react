import React, { Component } from 'react';
import Header from "../Header/Header"
import Contacts from "../contacts.json"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: []
    }
  }
  render() {
    let contacts = Contacts.map(contact => {
      this.setState({contacts: contact})
    })
    return <div className="App">
      <Header></Header>
      <Route></Route>
        <p>app</p>
      </div>;
  }
}

export default App;