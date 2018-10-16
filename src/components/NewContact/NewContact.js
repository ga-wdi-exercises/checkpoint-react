import React, { Component } from 'react'

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form action="/new-contact">
            <label>Name</label>
            <input type="text" name="name"/>
            <label>Email</label>
            <input type="email" name="email"/>
            <label>Profile Pic</label>
            <input type="image" name="image"/>
        </form>
      </div>
    )
  }
}

export default NewContact;