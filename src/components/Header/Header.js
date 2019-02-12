import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom'
import ContactList from './../ContactList/ContactList'
import NewContact from './../NewContact/NewContact'

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <Link to="/">
                        <h1>Contact List</h1>
                        </Link>
                        <Link to="/new">
                        <h1>New Contact</h1>
                        </Link>
                    </nav>
                </header>
                <Route path="/" render={() => <ContactList />} />
                <Route path="/new" render={() => <NewContact />} />
            </div>
        );
    }
}

export default Header;