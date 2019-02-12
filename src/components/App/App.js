import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ContactList from '../ContactList/ContactList'
import Header from '../Header/Header'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor() {
    super()

    this.state = {
      contacts: []
    }
  }
  componentDidMount() {
    this.setState({
      contacts: this.props.contacts
    })
  }

  render() {
    return <div className="App">
    <Header/>
        <Route path='/' exact render={() => <ContactList contacts={this.props.contacts} /> } />
        <Route path='/new-contact' component={ NewContact }/>
      </div>;
  }
}

export default App;