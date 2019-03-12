import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ContactList from '../ContactList/ContactList';
import NewContact from '../NewContact/NewContact';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: props.contacts
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header" />
                <Route path="/" component={ContactList} />
                <Route path="/new=contact" component={NewContact} />
            </div>
        );
    }
}

export default App;

// Your <App> component should also render:

// A div with a class name of 'App'
// Your <Header> component
// Two <Route /> components
// If the route is "/" then render the <ContactList> component; if the route is "/new-contact" then render the <NewContact> component;

{
    /* <header className="App-header">
    <h1>Audubon Society</h1>
    <h2>WELCOME BIRD LOVERS</h2>
</header>; */
}
