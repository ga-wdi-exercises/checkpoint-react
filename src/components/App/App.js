import React, { Component } from 'react';
import Header from '../Header/Header';
import ContactList from '../ContactList/ContactList';
import NewContact from '../NewContact/NewContact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      <Header />
      <Switch>
        <Route exact path="/" component={ContactList}/>
        <Route exact path="/new-contact" component={NewContact}/>
      </Switch>
    </div>
    );
  }
}

export default App;