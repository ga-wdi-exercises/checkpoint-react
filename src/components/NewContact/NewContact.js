import React, { Component } from 'react'

import {
  Route,
  Redirect
} from 'react-router-dom'

class NewContact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasSubmitted: false
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      hasSubmitted: true
    })
  }
  render() {
    return(
      <div>
        <h1>New Contact</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" placeholder="name"/>
          <input type="text" placeholder="email"/>
          <input type="text" placeholder="profile_picture"/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }

}

export default NewContact
