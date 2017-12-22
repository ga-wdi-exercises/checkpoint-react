import React, { Component } from 'react';
import {
  Link,
  Route
} from 'react-router-dom'
import Contact from '../Contact/Contact'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = }
    contacts: contacts
  }
  render() {
    let contactPath
    if (this.state) {
      contactPath = <ContactList/>
    } else {
      contactPath = <NewContact/>
    }
    return <div className="App">
        {/* <p>app</p> */}
        <Header />
        {contactPath}
      </div>;
  }
}

export default App;
