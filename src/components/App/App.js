import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ContactList from '../ContactList/ContactList';
import Header from '../Header/Header';
import NewContact from  '../NewContact/NewContact'


class App extends Component {
  constructor(){
    super(props)

    this.state = {
      contacts: props.contacts
    }
  
  }

  handleSubmit = (obj) => {
    let newArray = this.state.contacts;
    newArray.push(obj)
    this.setState({
      contacts: newArray,
    })
  }

  render() {
    return (
    <div className="App">
        <Header/>
          <Route path="/" exact render={(props) => <ContactList contacts={this.state.contacts} {...props}/>}/>
          <Route path="/new-contact" render={(props) => <NewContact handleSubmit={this.handleSubmit} {...props}/>}/>
      </div>
      );
  }
}

export default App; 