import React, { Component } from 'react'

class NewContact extends Component {
  constructor () {
    super()
    this.state = {
      profile_picture: '',
      name: '',
      email: ''
    }
    this.setProfilePicture = this.setProfilePicture.bind(this)
    this.setName = this.setName.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.addContact = this.addContact.bind(this)
  }

  setProfilePicture (e) {
    this.setState({ profile_picture: e.target.value })
  }

  setName (e) {
    this.setState({ name: e.target.value })
  }

  setEmail (e) {
    this.setState({ email: e.target.value })
  }

  addContact () {
      
  }

  render () {
    return (
      <div className='new-contact'>
        <h1>New Contact</h1>
        <form>
          <input type='text' onChange={this.setProfilePicture}><p>Name</p></input>
          <input type='text'onChange={this.setName}><p>Email</p></input>
          <input type='text'onChange={this.setEmail}><p>Image</p></input>
          {/* <input type='submit'placeholder='submit' onClick={this.addContact} /> */}
        </form>
      </div>
    )
  }
}

export default NewContact
