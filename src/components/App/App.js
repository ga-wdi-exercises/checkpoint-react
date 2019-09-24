import React, { Component } from 'react';
import { Route } from "react-router-dom"
import Header from "../Header/Header"
import ContactList from "../ContactList/ContactList"
import NewContact from "../NewContact/NewContact"


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      contacts: props.contacts
    }
  }
  render() {
    return <div className="App">
               <nav>
                  <Header />
              </nav>
              <main>
              <Route path="/"exact
              render={routeProps => (
                <ContactList contacts={this.state.contacts} {...routeProps} />
              )}
            />
                <Route path="/new-contact" component={NewContact}/>
              </main>
        
        
      </div>;
  }
}

export default App;