import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Header from '../Header/Header.js'
import ContactList from '../ContactList/ContactList.js'
import Contact from '../Contact/Contact.js'
import contacts from '../../contacts.json'

class App extends Component {
  constructor(props){
    super(props)
  this.state = {
    
    contactList: contacts
  }
}
  render() {
    return <div className="App">
        <Header />
        <ContactList />
        <main>
        <Switch>
              <Route
              path="/"
              exact
              component={App}
              
              />
              <Route
              path="/new-contact"
              render={(routerProps) => <Contact {...routerProps}{...this.state}/>}
              />
         </Switch>
            
        </main>
      </div>;
  }
}

export default App;