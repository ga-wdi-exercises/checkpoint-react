import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
      <div>
        <header>
            <h1>Contacts</h1>
            <nav>
            <Link to="/">
              <h2>HOME</h2>
            </Link>
            <Link to="/new-contact">
              <h2>NEW CONTACT</h2>
            </Link>
          </nav>
        </header>
      </div>
    )
  }

export default Header