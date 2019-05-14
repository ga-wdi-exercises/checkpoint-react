import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import ContactList from '../ContactList/ContactList.js'
import Header from '../Header/Header.js'
import NewContact from '../NewContact/NewContact.js'
import contacts from '../Contact/Contact.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: props.contacts
    }
  }
  render() {
    return <div className="App">
      <Header></Header>
      <Route path='/' component={ContactList} />
      <Route path='/new-contact' component={NewContact} />
      {this.props.contacts}
      <p>app</p>
    </div>;
  }
}

export default App;