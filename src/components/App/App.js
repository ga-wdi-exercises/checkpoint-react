import React, { Component } from "react";
import { Route, Link } from "react-router-dom"
import ContactList from '../ContactList/ContactList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contatcs: props.contacts
    };
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Contacts</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/new-contact">New Contact</Link>
          </nav>
        </header>
        <Route exact path="/" component={ContactList}/>
        <Route />
        <p>app</p>
      </div>
    );
  }
}

export default App;
