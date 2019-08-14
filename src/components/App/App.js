import React, { Component } from 'react';
import './App.css'
import {Link, Route} from 'react-router-dom'
import ContactList from '../ContactList/ContactList'
import Header from '../Header/Header'
import NewContact from  '../NewContact/NewContact'











class App extends Component {
  constructor(){
    super(props)

    this.state = {
      contacts: props.contacts
    }
  
  }

  render() {
    return <div className="App">
        <p>app</p>
        <Header/>
          <Route path="/" exact render={<ContactList/>}></Route>/>
          <Route path="/" exact render={<NewContact/>}></Route>/>
      </div>;
  }
}

export default App; 