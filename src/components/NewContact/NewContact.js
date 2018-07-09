import React, { Component } from 'react'

class NewContact extends Component {
  render () {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <input type='text' name='name'>Name: </input>
          <input type='text' name='email'>email: </input>
          <input type='text' name='image'>Picture Url: </input>
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default NewContact
