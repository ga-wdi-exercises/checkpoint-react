import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import NewContact from '../NewContact/NewContact'
import ContactList from '../ContactList/ContactList';

class App extends Component {
  render() {
    return <div className="App">
      <main>
        <Route path="/home"
          component={Header}
          // />
          // <Route path="/home"
          component={ContactList}
        />
        <Route
          path="/newContact" exact
          component={NewContact}
        />
      </main>
    </div>;
  }
}

export default App;