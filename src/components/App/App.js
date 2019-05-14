import React, { Component } from 'react';
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import {Route} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: props.contacts
    }
  }
  render() {
    return(
      <div className="App">
      <Header />
      <Route path='/' component={ContactList}/>
      <Route path="/new-contact" component={NewContact}/>
      </div>
    )
  }
}

export default App;