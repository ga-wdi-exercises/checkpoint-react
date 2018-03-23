import React, { Component } from 'react';
import Header from '../Header/Header.js'
import ContactList from '../ContactList/ContactList.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    };
  }

  render() {
    return
      <div className="App">
        <p>app</p>
        <Header />
        <ContactList />
      </div>;
  }
}

export default App;
