import React, { Component } from 'react'
import Header from '../Header/Header'
import { Router, Route, Switch } from 'react-router-dom'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor () {
    super()
    this.state = {
      contacts: []
    }
  }

  componentDidMount () {
    this.setState({
      contacts: this.props.contacts
    })
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route
              path='/new-contact'
              component={NewContact}
            />
            <Route
              path='/'
              render={(routerProps) => <ContactList {...routerProps} {...this.state} />}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
