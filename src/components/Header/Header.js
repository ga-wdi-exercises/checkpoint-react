import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                <header>
                <h1>Header</h1>
                </header>
                <Router>
                    <div>
                    <Link to="/" Home/>
                    <Link to="/new-contact" New Contact/>
                    </div>
                </Router>
                </nav>
                
            </div>
        );
    }
}

export default Header;