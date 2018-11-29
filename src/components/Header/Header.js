import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <nav>
                    <Link to="/home">
                        <h1>Home</h1>
                    </Link>
                    <Link to="/newContact">
                        <h1>New Contact</h1>
                    </Link>
                </nav>
            </div>
        );
    }
}

export default Header;