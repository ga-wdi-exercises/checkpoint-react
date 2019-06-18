import React, { Component } from 'react';
import Header from '../Header/Header';
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import {Route, Link, Switch, Redirect} from "react-router-dom";

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
        <p>app</p>
        <Route path="/" exact component={ContactList}></Route>
<Route path="/new-contact" component={NewContact}></Route>
      </div>;

  }
}

export default App;