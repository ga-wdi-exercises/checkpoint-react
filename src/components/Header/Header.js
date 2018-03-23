import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <h1>Contact List</h1>
            <Link to="/">Home</Link>
            <Link to="/new-contact">New Contact</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route />
          </Switch>
        </main>
      </div>
    );
  }
}

export default Header;
