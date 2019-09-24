import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import index from '../../index';
import Header from '../Header/Header';
import NewContact from '../NewContact/NewContact';
import ContactList from '../ContactList/ContactList';
import Contact from '../Contact/Contact';

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
        <div>
        <Header>
        
        </Header>
        </div>
        
      <Switch>
        <Route path="/" render={props => {
          return <ContactList contacts={this.state.contacts} {...props} />
        }}>
          
        </Route>

        <Route path="/new-contact" render={props => {
          return <NewContact {...props} />
        }} >
          
        </Route>
      </Switch>
        

      </div>

    )
  }
}

export default App;