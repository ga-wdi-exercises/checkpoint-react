import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

    render(){
        return( 
            <div>
                <h1>Contacts</h1>
                <nav>
                    <h3><Link to="/">Home</Link></h3>
                    <h3><Link to="/new-contact">New Contact</Link></h3>
                </nav>
            </div>
        )
    }
}

export default Header;