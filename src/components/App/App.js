import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { contacts: props.contacts }
  }
  render() {
    return(
      <div className="App">
        <Header />
        <Route path="/" exact component={ContactList}/>
        <Route path="/new-contact" component={NewContact}/>
      </div>
    )
  }
}

export default App;