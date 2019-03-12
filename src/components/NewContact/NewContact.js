import React, { Component } from 'react'

export default class componentName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      profile_picture: ""
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form onSubmit={this.onSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onClick={this.handleChange} />
          <label>Email</label>
          <input type="text" name="email" value={this.state.email} onClick={this.handleChange} />
          <label>Profile Picture</label>
          <input type="text" name="profile_picture" value={this.state.profile_picture} onClick={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}
