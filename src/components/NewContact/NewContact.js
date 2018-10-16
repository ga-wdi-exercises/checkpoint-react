import React, { Component } from "react";

class NewContact extends Component {
  render() {
    return (
    <div className='NewContact'>
     <h1>New Contact</h1>
     <form>
     <input type="text"  name="name" />
     
     <input type="text" name="email" />
        
    <input type="img" name="img"/>
        
        </form>
      </div>
    );
  }
}

export default NewContact 