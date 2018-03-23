import React, { Component } from 'react';
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'

class App extends Component {
  constructor(props) {
    super (props)
    this.state = {
      // where contacts is the array of contacts from contacts.json
      contacts: this.props.contacts
    };
  }
  render() {
    return <div className="App">
        <Header />
        
        <ContactList contacts={this.state.contacts} />
      </div>;
  }
}

export default App;