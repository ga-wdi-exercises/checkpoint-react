import React, { Component } from 'react'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import { Route, Switch } from 'react-router-dom'
import '../../styles/index.css'

// Your <App> component should also render:

//  // A div with a class name of 'App'
//  // Your <Header> component
//  // Two <Route /> components
//  // If the route is "/" then render the <ContactList> component; if the route is "/new-contact" then render the <NewContact> component;

class App extends Component {
  constructor(props) {
    super(props)
    //  Set the state from props passed down through index
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
        <Switch>
          {' '}
          <Route
            exact
            path='/'
            render={() => {
              return <ContactList {...this.state} />
            }}
          />
          <Route exact path='/new-contact' component={NewContact} />
        </Switch>
      </div>
    )
  }
}

export default App
