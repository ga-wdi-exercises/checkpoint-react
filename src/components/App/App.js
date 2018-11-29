import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Contact from '../Contact/Contact'
import NewContact from '../NewContact/NewContact'
import ContactList from '../ContactList/ContactList'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: this.props.contacts,
    }
  }
  render() {
    return <div className="App">
      <header>
        <nav>
        <Link to="/">
            <h1>Contact</h1>
          </Link>
          <Link to="/">
            <h1>Home</h1>
          </Link> 
          <Link to="/NewContact">
            <h1>New Contact</h1>
          </Link>         
          </nav>
      </header>
      <main>
      <Route path="/" exact
              component={Contact}
            />
      <Route path="/NewContact"
              component={NewContact}
            />
      </main>
      </div>;
  }
}

export default App;