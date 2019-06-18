import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch, Redirect } from "react-router-dom";


class Header extends Component {
   render () {
      return (
         <div>
            <header>
               <h1>Contacts</h1>
               <nav>
                  <Link to="/">
                     <span>Home</span>
                  </Link>
                  <Link to="/new-contact">
                     <span>New Contact</span>
                  </Link>
               </nav>
            </header>
         </div>
      );
   }
}

export default Header;