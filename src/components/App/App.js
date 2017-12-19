import React, { Component } from 'react';
import Header from '../Header/Header.js'
import NewContact from '../NewContact/NewContact.js'
import ContactList from '../ContactList/ContactList.js'
import contacts from "../../contacts.json";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: contacts,
      name: '',
      email: '',
      profile_picture: '',
      fireRedirect: false

    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.setRedirectFalse = this.setRedirectFalse.bind(this)
  }

  onSubmitForm(e) {
    e.preventDefault()
    console.log(this.props)
    let newContacts = this.state.contacts.slice()
    newContacts.push({name: this.state.name, email: this.state.email, profile_picture: this.state.profile_picture})
    this.setState({
      contacts: newContacts,
      fireRedirect: true
    })
  }

  setRedirectFalse(){
    this.setState({
      fireRedirect: false
    })
  }

  handleInputChange(e) {
    e.preventDefault()
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return <div className="App">
      <Header />
      <Route
        exact path="/new-contact"
        render={(props)=>
          <NewContact {...props}
            onSubmitForm={this.onSubmitForm} handleInputChange={this.handleInputChange}
          />}
      />
      <Route
        exact path='/'
        render={(props) => (
          <ContactList
            {...props}
            contacts={ this.state.contacts }
            setRedirectFalse={this.setRedirectFalse}
          />
        )}
      />
      {this.state.fireRedirect && (
        <Redirect to='/'/>
      )}
      </div>;
  }
}

export default App;
