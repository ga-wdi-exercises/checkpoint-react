import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NewContact extends Component {
  state = {
      name: null,
      email: null,
      profile_picture: null,
    }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addContact(this.state)
  }

  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type="text" id='name' onChange={this.handleChange}/>
          <label htmlFor='email'>Email</label>
          <input type="text" id='email' onChange={this.handleChange}/>
          <label htmlFor='profile_picture'>Profile Picture</label>
          <input type="text" id='profile_picture' onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default NewContact;
