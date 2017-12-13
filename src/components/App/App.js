import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom'
class App extends Component {
  render() {
    return
    <div>
      <nav>
        <h1>app</h1>
        <Link to="/contact">Contact</Link>
      </nav>
      <main>
        <Route
          path='/contact'
          render={() => (
            <Contact
              contact={ this.state.contact }
              setContact={ (data) => this.setContact(data) }
            />
          )}
        />
      </main>
    </div>
  }
}

export default App;
