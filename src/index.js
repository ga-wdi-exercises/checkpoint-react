import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import contacts from "./contacts.json";


ReactDOM.render(
    <Router>
        <App contacts={contacts} />
    </Router>,
    document.getElementById("root"))