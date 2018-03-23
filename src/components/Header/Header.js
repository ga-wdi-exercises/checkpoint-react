import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Header</h1>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/new-contact">New Contact</Link>
          </nav>
          <div>
              <Route path="/" render={
                  () => {
                    return (<h1>Home</h1>)
                  }
              }/>
              <Route path="/new-contact" render={
                    () => {
                      return (<h1>New contact</h1>)
                    }
              }/>
            </div>
        </div>
      </Router>
    )
  }
}

export default Header;
