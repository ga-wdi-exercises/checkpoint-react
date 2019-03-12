import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Contact from '../Contact/Contact'
import ContactList from '../ContactList/ContactList'
import Header from '../Header/Header'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      contacts: props.contacts
    }
  }

  render() {
    return (
    <BrowserRouter>
    <div>
    <h1 className='App'>Contacts</h1> 
    <Route exact path='/' component={ContactList} />
    <Route exact path='/new-contact' component={NewContact} />
    <Link to='/'>Home</Link>
    <Link to='/new-contact'>New Contact</Link> 
    </div>
    </BrowserRouter>
    );
  }
}

export default App;