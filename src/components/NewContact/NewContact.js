import React, { Component } from 'react'

export default class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form onSubmit={this.props.handleNewContact}>
          <p>
            <label htmlFor="name">Name</label> <br/>
            <input type="text" name="name"/>
          </p>
          <p>
            <label htmlFor="email">Email</label> <br/>
            <input type="email" name="email"/>
          </p>
          <p>
            <label htmlFor="image">Image</label> <br/>
            <input type="url" name="image"/>
          </p>
          <p>
            <input type="submit"/>
          </p>
        </form>
      </div>
    )
  }
}