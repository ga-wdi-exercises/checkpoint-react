import React, { Component } from 'react'
import Header from '../Header/Header'
import { Switch, Route } from 'react-router-dom'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    }
  }

  addContact = contact => {
    this.setState(prevState => ({
      contacts: this.props.contacts.push(contact)
    }))
  }

  render() {
    return (
      <div className="App">
        <Header >
          
          </Header>
        <Switch>
          <Route
            path="/new-contact"
            render={props => (
              <NewContact addContact={this.addContact} {...props} />
            )}
          />
        
          <Route
            path="/"
            render={() => <ContactList contacts={this.props.contacts} />}
          />
        </Switch>
      </div>
    )
  }
}

export default App