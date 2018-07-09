import React, { Component } from 'react'

class NewContact extends Component {
  render () {
    return (
      <div>
        <h1>New Contact</h1>

        <form>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Profile Picture' />
        </form>
      </div>
    )
  }
}

export default NewContact
