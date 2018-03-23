import React, { Component } from 'react';
import {link} from 'react-router'

class Header extends Component {
  render() {
    return (
    <div className="header">
      <header>
          <h1>Contacts</h1>
            <nav> 
                <ul>
                   <li><Link to ="/">Home</link></li>
                    <li><Link to ="/new-contact">New</link></li>
                </ul>
        </nav>
</header>
</div>
    );
  }
}

export default Header;



// Your <Header> component should render a <header>
//  element with an <h1> and a <nav> containing
//   two React Router <Link>s, one to the homepage ("/") 
//   and the other to create a new contact ("/new-contact").