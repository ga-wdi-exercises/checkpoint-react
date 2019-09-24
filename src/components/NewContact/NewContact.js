import React, { Component } from "react";

class NewContact extends Component{
    render(){
        return(
            <div>
                <h1>New Contact</h1>
                <form>
                    <label> Name: <input type="text" name="name" /></label>
                    <label> Email: <input type="text" name="name" /></label>
                    <label> Picture: <input type="text" name="name" /></label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default NewContact;