import React, { Component } from 'react';
import {
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

import Contact from '../Contact/Contact'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

import contacts from '../../contacts.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: contacts
    }
  }

  render() {
    return <div className="App">
        <p>app</p>
        <main>
          <Route path='/' render={() => (<ContactList/>)} />
          <Route path='/new-contact' render={() => (<NewContact/>)} />
        </main>
      </div>;
  }
}

export default App;
