import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header/Header';
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: props.contacts
    }
  }
  render() {
    return <div className="App">
  <Header></Header>
      <Router>
        <div>
          <Route path="/" render={(props) => {
            return (<ContactList {...props} contacts={this.state.contacts} />)
          }} />
          <Route path="/new-contact" render={(props) => {
            return (<NewContact {...props} />)
          }} />
        </div>
      </Router>

    </div>;
  }
}

export default App;