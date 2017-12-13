import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import Contact from '../Contact/Contact'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import Header from '../Header/Header'
import Contacts from '../../contacts.json'

class App extends Component {
  constructor () {
    super()
    this.state = { Contacts: Contacts }
  }

  render() {
    return(
        <Router>
          <div className="App">
            <nav>
              { Header }
            </nav>
            <main>
              <Switch>
                <Route
                  path="/"
                  component= { ContactList }
                  />
                <Route
                  path="/new-contact"
                  component= { NewContact }
                />
              </Switch>
            </main>
          </div>
        </Router>
      )
    }
  }
}

export default App;
    set the initial state for your component
