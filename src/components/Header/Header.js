import {Route, Link, Redirect, Switch} from 'react-router-dom'

import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Hi there</h1>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/new-contact">New Contact</Link>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;