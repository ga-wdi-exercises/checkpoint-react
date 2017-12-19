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
          <p><label>Name</label><br />
            <input type='text' onChange={(e) => this.setName(e)} /></p>
          <p><label>E-Mail</label><br />
            <input type='text' onChange={(e) => this.setEmail(e)} /></p>
          <p><label>Photo</label><br />
            <input type='text' onChange={(e) => this.setPhoto(e)} /></p>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default NewContact
