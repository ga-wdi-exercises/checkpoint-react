import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>
                </h1>
                <nav>
                    <Link to="/">homepage</Link>
                    <Link to="/new-contact">new contact</Link>
                </nav>
            </header>
        )
    }
}
