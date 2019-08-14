import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, Redirect } from "react-router-dom";
import ContactsData from "../../contacts.json"
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";

class App extends Component {
  render() {
    return <div className="App">
        <Header />
       
        <ContactList />
        <NewContact />
      </div>;
  }
}

export default App;










// <main>
// <Switch>
//   <Route path="/" exact render={() => <Redirect to="/Home" />} />
//   <Route path="/Home" exact render={() => <Home />}/>
//   <Route path="/About" exact render={() => <About />}/>
//   <Route path="/NewBookForm" exact render={() => <NewBookForm handleCancelClick={this.handleCancelClick}/>}/>
// </Switch>
// </main>
