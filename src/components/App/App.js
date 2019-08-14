import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import Header from '../Header/Header'
import NewContact from '../NewContact/NewContact'
import ContactList from '../ContactList/ContactList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts:props.contacts
    }
  }

  render() {
    return <div className="App">
      <Header/>
        <p>app</p>
        <Route path='/' render={() => <ContactList contacts={this.state.contacts}/>}/>
        <Route path='/new-contact' component={NewContact}/>
      </div>;
  }
}

export default App;