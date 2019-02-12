import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Contacts</h1>
                    <nav>
                        <Link to="/">
                            <h1>Home</h1>
                        </Link>

                        <Link to="/new-contact">
                            <h1>New Contacts</h1>
                        </Link>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;

