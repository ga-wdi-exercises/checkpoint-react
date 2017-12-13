import React, { Component } from 'react'
import '../../styles/index.css'



class NewContact extends Component {
  constructor(props) {
    super(props)
    // initialize state
    this.state = {
      name: '',
      email: '',
      profile_picture: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)

  }

  onSubmit(e) {
    e.preventDefault()

  }

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }
  render() {

    return(
      <div>
        <h1>New Contact</h1>
        <label>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </label>
        <label>
          <input
            name="email"
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <label>
          <input
            name="profile_picture"
            type="text"
            placeholder="profile_picture"
            value={this.state.profile_picture}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" onClick={this.onSubmit}/>
      </div>
    )
  }
}


export default NewContact
