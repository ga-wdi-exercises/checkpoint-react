import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
    render() {
        return(
            <div>
                <h1>Contacts</h1>
                <nav>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="new-contacts/">
                        <li>New Contacts</li>
                    </Link>                    
                </nav>
            </div>
        )
    }
}

export default Header;