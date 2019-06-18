import React, { Component } from 'react';
import {Route, Link} from "react-router-dom";
import NewContact from "../NewContact/NewContact";
import ContactList from '../ContactList/ContactList'
class Header extends Component {
    render() {
        return (
            <div>
                <Header>
                    <h1>
                        <nav>
<Link to="/">Home</Link>
<Link to="/new-contact" component={NewContact}>new contact</Link>
                        </nav>
                    </h1>
                </Header>
                {/* <Route path="/" exact component={ContactList}></Route>
        <Route path="/new-contact" component={NewContact}></Route> */}
            </div>
        );
    }
}

export default Header;