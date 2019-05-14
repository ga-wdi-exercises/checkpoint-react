import React, { Component } from 'react'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import { Route } from 'react-router-dom'

// Your <App> component should also render:

// A div with a class name of 'App'
// Your <Header> component
// Two <Route /> components
// If the route is "/" then render the <ContactList> component; if the route is "/new-contact" then render the <NewContact> component;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: props.contacts
    }
  }
  render() {
    return (
      <div className='App'>
        <div className='Header'>
          <Header />
        </div>
        <p>App</p>
        <Route
          path='/'
          render={routerProps => (
            <ContactList {...routerProps} {...this.state} />
          )}
        />
        <Route path='/new-contact' component={NewContact} />
      </div>
    )
  }
}

export default App
