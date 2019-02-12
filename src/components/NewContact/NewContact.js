import React, { Component } from 'react'

class NewContact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      image: ''
    }
  }

  onChangeText = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <input
            type="text"
            onChange={this.onChangeText}
            placeholder="name"
            name="name"
            value={this.state.name}
          />
          <input
            type="text"
            onChange={this.onChangeText}
            placeholder="email"
            name="email"
            value={this.state.email}
          />
          <input
            type="text"
            onChange={this.onChangeText}
            placeholder="picture"
            name="image"
            value={this.state.propfile_picture}
          />
          <button
            onClick={e => {
              e.preventDefault()
              this.props.addContact(this.state)
              this.props.history.push('/')
            }}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default NewContact