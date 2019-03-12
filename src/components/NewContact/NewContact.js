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
    console.log('hit')
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.addContact(this.state);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form onSubmit={this.onSubmit}>
          <p>
            <label>Name</label><br />
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </p>
          <p>
            <label>Email</label><br />
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </p>
          <p>
            <label>Profile Picture</label><br />
            <input type="text" name="profile_picture" value={this.state.profile_picture} onChange={this.handleChange} />
          </p>
          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}
