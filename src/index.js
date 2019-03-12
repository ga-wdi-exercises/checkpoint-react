import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App/App.js";
import contacts from "./contacts.json";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
