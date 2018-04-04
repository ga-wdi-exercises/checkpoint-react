import React, { Component } from 'react'
import Contact from '../Contact/Contact'
import ContactList from '../ContactList/ContactList'
import Header from '../Header/Header'
import NewContact from '../NewContact/NewContact'
import contacts from '../../contacts.json'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()

    contacts: this.props.contacts
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/new-contact"
            render={() => {
              return <NewContact />
            }}
          />
          <Route
            path="/"
            render={() => {
              return <ContactList />
            }}
          />
        </Switch>
      </div>
    )
  }
}

export default App
