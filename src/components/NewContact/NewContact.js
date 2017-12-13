import React, { Component } from 'react'

class NewContact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contact: {
        name: '',
        email: '',
        profile_picture: ''
      }
    }
  }

  setName (e) {
    let theContact = this.state.contact
    theContact.name = e
    this.setState({
      contact: theContact
    })
  }

  setEmail (e) {
    let theContact = this.state.contact
    theContact.ename = e
    this.setState({
      contact: theContact
    })
  }

  setPhoto (e) {
    let theContact = this.state.contact
    theContact.profile_picture = e
    this.setState({
      contact: theContact
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.newContact(this.state.contact)
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <h1>New Contact</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Name</label>
          <input type='text' onChange={(e) => this.setName(e)} />
          <label>E-Mail</label>
          <input type='text' onChange={(e) => this.setEmail(e)} />
          <label>Photo</label>
          <input type='text' onChange={(e) => this.setPhoto(e)} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default NewContact
