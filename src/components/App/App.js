import React, { Component } from "react";
// import Contact from "../Contact/Contact";
import ContactList from "../ContactList/ContactList";
import Header from "../Header/Header";
import NewContact from "../NewContact/NewContact";
import { Route, Link, Switch } from "react-router-dom";

class App extends Component {
    constructor() {
        super();
        this.state = {
            contacts: this.props.contacts
        };
    }
    render() {
        return (
            <div className="App">
                <p>app</p>
                <Header />
                <Link to="/">Contact List</Link>
                <Link to="new-contact">New Contact</Link>
                <Switch>
                    {/* <Route path="/" render={routerProps => {
                        return <ContactList contacts={...this.state} {...routerProps} />
                    }}  />
                    <Route path="new-contact" render={routerProps => {
                        return <NewContact contacts={...this.state} {...routerProps} />
                    }} */}
                    <Route path="/" component={ContactList} />
                    <Route path="new-contact" component={NewContact} />
                    }}
                </Switch>
            </div>
        );
    }
}

export default App;
