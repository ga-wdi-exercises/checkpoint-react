import React, { Component } from "react";

class Header extends Component {
  // Should render a <header> element with an <h1> and <nav> containing two React router <Link>s:
  // one to the homepage('/') and the other to create a new contact ('/new-contact)
  render() {
    return (
      <div>
        <header>
          <h1>Contacts</h1>
        </header>
        <nav>
          {/* link to 1 to homepage aka contactlist */}
          {/* link to 2 to new contact */}
        </nav>
      </div>
    );
  }
}

export default Header;
