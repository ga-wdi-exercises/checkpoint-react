import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    }
  }
  render () {
    return (
      <div className='App'>
        <div>
          <p>app</p>
        </div>
        <div className='Header'>{Header}</div>
        <Switch>
          <Route
            path='/'
            component={ContactList}
          />
          <Route
            path='/new-contact'
            component={NewContact}
          />
        </Switch>
      </div>
    )
  }
}

export default App
