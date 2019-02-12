import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import contacts from '../../contacts.json'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    };
  }

  render() {

    return <div className="App">
      <p>app</p>
      <Header />
      <Route path='/' render={(routerProps)=> <ContactList {...routerProps}{...this.state}/>} />
      <Route path='/new-contact'render={(routerProps)=> <NewContact {...routerProps}{...this.state}/>} />
    </div>;
  }
}

export default App;