import React, { Component } from 'react'
import ContactList from '../ContactList/ContactList'
import Header from '../Header/Header'

// const contactsURL = '../../contacts.json'

class App extends Component {
  // componentDidMount () {
  //   const data = `${contactsURL}`

  //   axios.get(data)
  //     .then(response => {
  //       let contact = response.data
  //       this.props.contacts(contacts)
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  // }

  constructor (props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    }
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <p><ContactList /></p>
      </div>
    )
  }
}

export default App
