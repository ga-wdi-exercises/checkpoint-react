import React, { Component } from 'react';
import {
    Link,
    Route
  } from 'react-router-dom'



class NewContact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        NewContact: []
      };
    }

render() {
    return (
        <div className="App">
         <title>App</title>
        <form> 
        <label>
            Name:
            <input type="text" name="name" />
        </label>
            <input type="submit" value="Submit" />
            <label>
            Email:
            <input type="text" name="email" />
        </label>
            <input type="submit" value="Submit" />
            <label>
            Image:
            <input type="image" name="image" />
        </label>
            <input type="submit" value="Submit" />

            </form>
            </div>
    
        )
}
}

export default NewContact;



     