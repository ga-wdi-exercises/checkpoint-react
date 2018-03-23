import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Header from '../Header/Header'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    }
  }

  render () {
    return <div className='App'>
      <Header />
      <p>app</p>
    </div>
  }
}

export default App
