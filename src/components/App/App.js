// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return <div className="App">
//         <p>App</p>
//       </div>;
//   }
// }

// export default App;

import React, { Component } from "react";
import Homepage from "../index.js";
import newContact from "../ContactList.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: props.contacts
    };
  }

  render() {
    return (
      <div className = "App" >
       <p>App</p>
     </div>
      <Router>
        <div>
          <nav>
            <h1>React App</h1>
            <Link to="/homepage">Homepage</Link>
            <Link to="/new-contact">New Contact</Link>
          </nav>
          <main>
              <Route
                path="/"
                render={props => {
                  return (
                    <Search
                      {...props}
                      setContactList={(props) =>
                        this.setContactList()
                      }
                    />
                  );
                }}
              />
              <Route
                path="/newContact"
                render={props => {
                  return (
                    <Results
                      {...props}
                      newContact={this.state.newContact}
                    />
                  );
                }}
              />
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
