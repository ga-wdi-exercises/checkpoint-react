import React,  { Component } from "react";
import "./Contact";

let contact = {
    name: 
}

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <Link to="/contact">
                    <img src="https://upload.wikimedia.org/wikipedia/en/0/02/Tweety.svg" alt="">
                    <h3>Name</h3>
                    <h4>Email</h4>
                </Link>
            </div>
        )
    }
}