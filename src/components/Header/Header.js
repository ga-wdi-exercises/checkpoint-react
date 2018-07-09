import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import ContactList from '../ContactList/ContactList'
import Contact from '../Contact/Contact'

class Header extends Component {
    render() {
        return (
            <div>
                <Header>
                    <h1>Contacts</h1>
                    <nav>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/new-contact">New Contact</Link></div>
                    </nav>
                </Header>

                <Route path="/"
                    component={ContactList}
                />
                <Route path="/new-contact"
                    component={Contact}
                />

            </div>
        );
    }
}

export default Header;