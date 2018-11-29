import React, { Component } from 'react';
import contacts from "../../contacts.json";
import NewContact from "../NewContact/NewContact.js"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: this.props.contacts
    };
  }

  render() {
    return (
      <div className="App">
        <header>
        <Link to="/">
            <h1>Home</h1>
            </Link>
            <Link to="/NewContact">
            <h1>New Contact</h1>
            </Link>
        </header>
        <main>
              <Route path="/" exact component={Home}/>
              <Route path="/NewContact" exact component={NewContact}/>
        </main>
      </div>
    );
  }
}

export default App;

// Inside index.js, import React Router and pass it to ReactDOM.render() as the root component with <App> as a child component. We've imported the starter contacts for you, pass these in to your <App> component as a prop, contacts.

// Your <App> component should also render a div with a class name of 'App', your <Header> component and then either your <ContactList> or <NewContact> component, depending on the route. If the route is "/" then render the <ContactList> component; if the route is "/new-contact" then render the <NewContact> component;




