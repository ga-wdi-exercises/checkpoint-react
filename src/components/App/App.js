import React, { Component } from 'react';
import Header from '../Header/Header';
import ContactList from '../ContactList/ContactList';
import NewContact from '../NewContact/NewContact';

class App extends Component {
constructor(props){
  super(props)
  this.state={
    contact: props.contacts
  }
}
  render() {
    return <div className="App">
        <Header />
        <Route exact path='/' render={ContactList} />
        <Route exact path='/new-contact' render={NewContact} />
      </div>;
  }
}

export default App;