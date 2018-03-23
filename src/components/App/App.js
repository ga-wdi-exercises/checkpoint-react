import React, { Component } from 'react';
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    }
    newContact: []
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log('submitted')
    
  }

  render() {
    console.log(this.state.contacts)
    var contacts = this.state.contacts
    return (
      <div className="App">
      <Header />
      <Router>
       
          <Switch>
          <Route path='/' render={(props) => {
            return <ContactList contacts={contacts} />
          }} />
          <Route path='/new-contact' render={() => {
            return <NewContact onClick={this.handleSubmit}/>
          }} />
          </Switch>
        
      </Router>
      </div>
    )
  }
}

export default App;