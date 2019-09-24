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
    this.createContact = this.createContact.bind(this)
  }

  createContact(info){
    this.setState({
      contacts: this.props.contacts.push(info)
    })
  }

  render() {
  
    return (
      <div className="App">
        <div>
        <Header>

        </Header>
        </div>
        
      
        <Route path="/" exact render={props => {
          return <ContactList contacts={this.state.contacts} {...props} />
        }}>
          
        </Route>

        <Route path="/new-contact" exact render={props => {
          return <NewContact {...props} />
        }} >
          
        </Route>
      
        

      </div>

    )
  }
}

export default App;