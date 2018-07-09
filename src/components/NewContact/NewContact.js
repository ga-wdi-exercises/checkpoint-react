import React, { Component } from 'react'

export default class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="E-mail"/>
        <input type="url" name="Profile Picture"/>
        <input type="button" value="Add"/>
        </form>
      </div>
    )
  }
}
