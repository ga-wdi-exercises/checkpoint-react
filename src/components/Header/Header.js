import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom'

class Header extends Component {
    constructor() {
        super()


    }

    render() {
        return (
            <header>
                <h1>Contacts</h1>
                <nav>
                    <div><Link to="/">HOME</Link></div>
                    <div><Link to="/new-contact">NEW CONTACT</Link></div>
                </nav>
            </header>
        )
    }


}

export default Header
