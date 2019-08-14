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
    // console.log(ContactsData)
    return <div className="App">
        <Header />
        <main>
          <Switch>
            {/* <Route path="/" exact render={() => <Redirect to="/Home" />} /> */}
            <Route path="/Home" exact render={() => <ContactList ContactsData={ContactsData}/>}/> 
            <Route path="/NewContact" exact render={() => <NewContact />}/> 
          </Switch>
      </main>

        
        
      </div>;
  }
}

export default App;












{/* <Route path="/NewBookForm" exact render={() => <NewBookForm handleCancelClick={this.handleCancelClick}/>}/> */}
