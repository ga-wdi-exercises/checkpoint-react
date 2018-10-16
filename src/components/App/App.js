import React, { Component } from 'react';
import '../../styles/index.css'
import {Route, Link, Switch} from 'react-router-dom'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import Contact from '../Contact/Contact'

import contacts from '../../contacts.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: contacts
    }
  }

  addContact = (contact) => {
    let contacts = [...this.state.contacts, contact]
    this.setState({
      contacts: contacts
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App">
          <Header />
        </div>
        <main>
          <Switch>
            <Route path="/new-contact" render={() => <NewContact addContact={this.addContact}/>}/>
            <Route path="/" render={() => <Contact contacts={this.state.contacts}/>}/>
          </Switch>
        </main>
      </div>
  )
  }
}

export default App;
