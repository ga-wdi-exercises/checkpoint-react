import React, { Component } from "react";
import { Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav className="nav">
                <h1 className="title">
                    <Link to="/">Home</Link> 
                    <Link to="/new-contact">New Contact</Link>
                </h1>
                </nav>
            </header>
        )
    }  
}


export default Header;