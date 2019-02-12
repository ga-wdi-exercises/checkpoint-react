import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: this.props.contacts,
      newContact: {}
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  changeHandler(event) {
    console.log('change handler called')
    let newContCopy = this.state.newContact
    newContCopy[event.target.name] = event.target.value
    this.setState({newContact: newContCopy})
  }

  submitHandler(event) {
    event.preventDefault()
    console.log('submit called')
    let contactsCopy = this.state.contacts.slice(0)
    let newCont = this.state.newContact
    
    contactsCopy.push(newCont)
    this.setState({contacts: contactsCopy})
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Route path="/" exact render={() => <ContactList contacts={this.state.contacts}/> } />
        <Route path="/new-contact" render={() => <NewContact changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>} />
      </div>
    );
  }
}

export default App;