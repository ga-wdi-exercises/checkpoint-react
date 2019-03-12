import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header-header">
                <h1>Contacts</h1>
                <nav>
                    <Link to="/" />
                    <Link to="/new-contact" />
                </nav>
            </div>
        );
    }
}

export default Header;
