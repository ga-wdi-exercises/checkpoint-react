import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/"><p>Contact list</p></Link>
                    <Link to="/new-contact"><p>new contact</p></Link>
                </nav>
                <h1></h1>
            </div>
        );
    }
}

export default Header;