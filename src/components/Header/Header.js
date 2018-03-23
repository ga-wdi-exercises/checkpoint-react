import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NewContact from '../NewContact/NewContact'

class Header extends Component {
   render() {
      return (
         <div>
            <h1>Contacts</h1>
            <Router>
               <div>
               <nav>
                  <Link to='/'>Home</Link>
                  <Link to='/new-contact'>New Contact</Link>
               </nav>
               <Route path='/new-contact' 
          render={() => {
            return (
              <NewContact />
            )
          }} 
        />
        </div>
            </Router>
         </div>
      );
   }
}

export default Header;