import React, { Component } from 'react';
import {Route, Link, Switch} from "react-router-dom"


class Header extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <header>
                    <h1>Contacts</h1>
                </header>

                <nav>
                    <Link to="/">
                        <h1>Home</h1>
                    </Link>


                    <Link to="/new-contact">
                        <h1>New Contact</h1>
                    </Link>
                </nav>

            </div>


        )

    }
}


export default Header;