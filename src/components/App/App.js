import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    }
  }

  render() {
    return (
      <div className="App">
        <p>app</p>
      </div>
    )
  }
}

export default App
