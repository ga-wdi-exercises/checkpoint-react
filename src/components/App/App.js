import React, { Component } from 'react';
import { Route, Link, Switch} from 'react-router-dom'

// routes
import Contact from '../Contact/Contact'
import ContactList from '../ContactList/ContactList'
import Header from '../Header/Header'
import NewContact from '../NewContact/NewContact'

class App extends Component {

  constructor(props) {
    super(props)
    //set initial state
    this.state= {
      contacts: this.props.contacts
    }
  }

  render() {
    return <div className="App">
        <Header/>
      <Route path = "/" exact component={App} />
      <ContactList contacts={this.state.contacts}/>
      <Route path="/new-contact" component={NewContact} />
      </div>;
  }
}

export default App;