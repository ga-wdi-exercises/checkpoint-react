import React, { Component } from 'react';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import ContactList from '../ContactList/ContactList';
import NewContact from '../NewContact/NewContact';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: contacts
    }
  }
  render() {
    
    return (
      <div className="App">
        <p>app</p>
        {Header}

      </div>;
    )
  }
}

export default App;
