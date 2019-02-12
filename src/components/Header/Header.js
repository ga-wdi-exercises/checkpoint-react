import React, { Component } from "react";
import { Link, Route } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>H1 be here</h1>
                    <nav>
                        <Link to="/" />
                        <Link to="/new-contact" />
                        <Route path="/" ></Route>
                        <Route path="new-contact"></Route>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;
