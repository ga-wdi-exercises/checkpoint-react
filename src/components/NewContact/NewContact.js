import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NewContact extends Component {
  render() {
    return (
      <div>
        <form>
          <h1>New Contact</h1>
          <label htmlFor="newcontact">Contact</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.props.handleNewContact}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.props.handleNewContact}
          />
          <input
            type="url"
            name="profilepic"
            placeholder="Profile Picture"
            onChange={this.props.handleNewContact}
          />
        </form>
      </div>
    )
  }
}

export default NewContact
