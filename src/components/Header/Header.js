import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'


class Header extends Component {
  render() {
    return <div className="App">
        <Router>
            <div>
                <nav>
                    <h1>
                        React Routes
                    </h1>
                    <Link to="/contact"> Contact </Link>
                    <Link to="/newcontact"> New Contact</Link>
                </nav>
            </div>
        </Router>
      </div>;
  }
}

export default Header;