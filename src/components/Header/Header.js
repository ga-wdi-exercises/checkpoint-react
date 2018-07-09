import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    return () {
        return (
            <div>
                <h1>Contacts</h1>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/new-contact'>New Contact</Link
                    </nav>
            </div>
        );
    }
}

export default Header;