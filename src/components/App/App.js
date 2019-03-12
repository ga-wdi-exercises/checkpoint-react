import React, { Component } from 'react';
import ReactDOM from "react-dom";
import App from './components/App/App.js';


class App extends Component {
  render() {
    return (
        <div className="App">
        <header />
        <h1 />

        <p>app</p>
          <nav>
          <Link to="/">
          </Link>

          <link to="/NewContact">{"new contact"}</link>
            
          </nav>
        </div>
    );
  }
}


export default App;