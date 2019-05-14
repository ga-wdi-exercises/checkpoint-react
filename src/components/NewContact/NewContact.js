import React, { Component } from 'react'

export default class NewContact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      email: null,
      profile_picture: null
    }
  }
  // https://reactjs.org/docs/forms.html
  handleChange = event => {
    this.setState({ value: event.target.value })
  }
  // https://reactjs.org/docs/forms.html
  handleSubmit = event => {
    event.preventDefault()
  }
  render() {
    return (
      // https://reactjs.org/docs/forms.html

      <form onSubmit={this.handleSubmit}>
        <label>
          <h1>New Contact</h1>
          <h5>name: </h5>
          <input type='text' name='name' onChange={this.handleChange} />
          <h5>email: </h5>
          <input type='text' name='email' onChange={this.handleChange} />
          <h5>profile picture (URL): </h5>
          <input
            type='text'
            name='profile_picture'
            onChange={this.handleChange}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

// {
/* <NewContact>
Your <NewContact> component should render:

A form with inputs for the name, email and profile_picture. */
// }
