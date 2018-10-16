import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Contact from '../Contact/Contact'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import Header from '../Header/Header'


class App extends Component {
  
  constructor() {
    super()
    this.state = {
      
    }
  }

  render() {
    return <div className="App">
        <title>

        </title>
        <Contact />
      </div>;
  }
}

export default App;