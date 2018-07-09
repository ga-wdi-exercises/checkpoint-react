import React, { Component } from 'react'

class NewContact extends Component {
  render () {
    return (
      <div>
        <h1>New Contact </h1>
        <form>
          <input type='text' name='name'placeholder='Name' /> <br />
          <input type='email' name='email'placeholder='E-mail' /> <br />
          <input type='text' name='profile_picture'placeholder='Profile Picture' /> <br />

        </form>

      </div>
    )
  }
}

export default NewContact
