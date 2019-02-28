import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1></h1>
                    <nav>
                        <Link to="/">
                            <a>homepage</a>
                        </Link>
                        <Link to="/new-contact">
                            <a>create a new contact</a>
                        </Link>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;