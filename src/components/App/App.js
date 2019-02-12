import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import Contact from '../Contact/Contact';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      contacts: this.props.contacts
    }
  }
  

  render() {
    return <div className="App">
        <Header />
        <Route path='/' render={() => <ContactList />} />
        {/* <Route path='/' exact component= {ContactList}/> */}
        <Route path='/new-contact' exact component={ NewContact }/>

      </div>;
  }
}

export default App;