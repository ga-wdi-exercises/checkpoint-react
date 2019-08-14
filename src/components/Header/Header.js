import React, { Component } from "react"
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Test</h1>
                <nav>
                    <Link to="/">Test1</Link>
                    <Link to="/new-contact">Test2</Link>
                </nav>
            </header>
        )
    }
}

export default Header;