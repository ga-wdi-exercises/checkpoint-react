import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <h1>Contacts</h1>
          <Link to="/">Home</Link>
          <Link to="/new-contact">New</Link>

          <Route
            path="/"
            render={() => <ContactList contacts={this.props.contacts} />}
          />
          <Route
            path="/new-contact"
            render={() => <NewContact contacts={this.props.contacts} />}
          />
        </nav>
      </div>
    );
  }
}

export default Header;
