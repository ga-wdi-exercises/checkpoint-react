import React, { Component } from 'react'

class NewContact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      profile_picture: ''
    }
  }

  setName (e) {
    this.setState({
      name: e.target.value
    })
    console.log(this.state.name)
  }

  setEmail (e) {
    this.setState({
      email: e.target.value
    })
    console.log(this.state.email)
  }

  setPhoto (e) {
    this.setState({
      profile_picture: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.newContact(this.state)
    this.props.history.push('/')
    console.log(this.state.contact)
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
