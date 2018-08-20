import React, { Component } from "react-router-dom";
import App from "../App/App";

class newContact extends Component {
    render() {
        return(
            <input type="text" name="email"><br> 
            <input type="text" name="contact"><br> 
            <input type="text" name="image"><br>
            <input type="Submit" name="Submit">
        )
    }
}