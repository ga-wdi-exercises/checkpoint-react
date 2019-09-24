import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";
import App from "./components/App/App.js";
import contacts from "./contacts.json";

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Router>
    <App contacts={contacts} />
  </Router>,
  document.getElementById("root")
);