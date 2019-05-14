import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          {console.log(this.props)}
          <Link to='/'>Home</Link>
          <Link to='/new-contact'>New Contact</Link>
        </nav>
      </div>
    )
  }
}
