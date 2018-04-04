import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <input type="text" name="name" />
          <input type="text" name="email" />
          <input type="text" name="profile_picture" />
        </form>
        <Redirect to="/">
          <button type="submit">Submit</button>
        </Redirect>
      </div>
    )
  }
}

export default NewContact
