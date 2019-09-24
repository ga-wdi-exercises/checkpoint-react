import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'



export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Hello This is A Title</h1>
            <nav>
                <Link to="/">Homepage</Link>{<br></br>}
                <Link to="/new-contact">New Contact</Link>
            </nav>


            </div>
        )
    }
}
