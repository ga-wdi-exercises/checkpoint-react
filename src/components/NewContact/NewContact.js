import React, { Component } from 'react'
import axios from 'axios'


class NewContact extends Component {
  componentDidMount () {
    this.props.history.push('/')
  }

  render() {
    return(
      <div>
        <h1> New Contact </h1>
        <form>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="profile_picture" />
        </form>
      </div>
    )
  }
}
export default NewContact
