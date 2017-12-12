import React, { Component } from 'react'

export default class NewContact extends Component {
  constructor(props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let { name, email, profile_picture } = e.target.elements;

    this.props.addContact({
      name: name.value,
      email: email.value,
      profile_picture: profile_picture.value
    })

    this.props.history.push('/')
  }

  render() {
    return <div>
        <h1>New Contact</h1>
        <form onSubmit={this.handleFormSubmit}>
          <p>
            <label htmlFor="name">Name</label> <br />
            <input type="text" name="name" />
          </p>
          <p>
            <label htmlFor="email">Email</label> <br />
            <input type="email" name="email" />
          </p>
          <p>
            <label htmlFor="profile_picture">Image</label> <br />
            <input type="url" name="profile_picture" />
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </div>;
  }
}