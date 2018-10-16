import React, { Component } from 'react';

class NewContact extends Component {
  render() {
    return <div className="App">
            <title>
                <h1> Title </h1>
            </title>
            <form>
        <label>
         Name:
        <input type="text" name="name" />
        </label>
        <label>
        Image:
        <input type="image" name="image" />
        </label>
        <label>
        Email:
        <input type="email" name="email" />
        </label>
        <input type="submit" value="Submit" />
        </form>
      </div>
  }
}

export default NewContact;