import React, { Component } from "react";

class NewContact extends Component {

  constructor (props) {
    super(props)
    this.state = {
      contact: {
        name: '',
        email: '',
        image: ''
      }
    }
    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)
  }

  change(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit(event) {
    event.preventDefault()
    this.props.addContact(this.state)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
      <h1>New Contact</h1>
      <form onChange={this.change}>
        <label>Name</label>
        <input name='name' type='text'></input>
        <label>Email</label>
        <input name='email' type='text'></input>
        <label>Profile Picture</label>
        <input name='image' type='text'></input>
        <button onClick={this.submit}>Submit</button>
      </form>
      </div>
    )
  }
}

export default NewContact