import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return( 
    <header>
        <h1> 
            <Link to= "/">Home</Link>
        </h1>
        <nav>
            <Link to= "/new-contact"> New Contact</Link>
        </nav>
    </header>
        );
    }
}

export default Header;