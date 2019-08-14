import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import ContactList from "../ContactList/ContactList";
import Header from "../Header/Header";
import NewContact from "../NewContact/NewContact";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      contacts: props.contacts
    }
  }

  render() {
    return ( 
      <div className="App">
        <Header>
          <h1>header</h1>
          <nav>
            <div className="nav-item"><Link to="/">Home</Link> </div>
            <div className="nav-item"><Link to="/new-contact">Create New Contact</Link> </div>
          </nav>
        </Header>
        <p>app</p>
        <Switch>
          <Route path="/" component={ContactList} />
          <Route path="/new-contact"  component={NewContact} />
        </Switch>
      </div>
    );
  }
}

export default App;