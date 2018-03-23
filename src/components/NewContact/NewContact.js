import React, { Component } from 'react'

class NewContact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    let target = e.target.name
    let value = e.target.value
    this.setState({
      [target]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleNewContact(this.state)
  }

  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" onChange={this.handleChange} />
          <label htmlFor="profile_picture">Picture:</label>
          <input
            type="text"
            name="profile_picture"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Add New Contact"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    )
  }
}

export default NewContact
