import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    }
    this.handleNewContact = this.handleNewContact.bind(this)
  }

  handleNewContact(newContact) {
    let array = this.state.contacts
    array.push(newContact)
    this.setState({
      contacts: array
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            path="/new-contact"
            render={() => (
              <NewContact handleNewContact={this.handleNewContact} />
            )}
          />
          <Route
            path="/"
            render={() => <ContactList contacts={this.state.contacts} />}
          />
        </Switch>
      </div>
    )
  }
}

export default App
