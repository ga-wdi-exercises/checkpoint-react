import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render () {
    console.log(this.state.contacts)
    return(
      <div>
        <header>
          <nav>
            <ul>
              <li> <Link to='/'> Home </Link> </li>
              <li> <Link to='/new-contact'> New Contact </Link> </li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
