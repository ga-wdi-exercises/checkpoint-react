import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }
  handleOnClick (e) {
    e.preventDefault()
    let contacts = this.state.contacts
    let newCon = {
      name: this.state.name,
      email: this.state.email,
      profile_picture: this.state.image
    }
    contacts.push(newCon)
    console.log(contacts)
    this.setState({
      contacts
    })
  }

  render () {
    return <div className='App'>
      <Header />
      <Switch>
        <Route path='/new-contact' render={() => <NewContact onChange={this.handleOnChange} onClick={this.handleOnClick} />} />
        <Route path='/' render={() => <ContactList contacts={this.state.contacts} />} />
      </Switch>
    </div>
  }
}

export default App
