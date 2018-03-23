import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import "./styles/index.css";
import App from "./components/App/App";

import contacts from "./contacts.json";

ReactDOM.render(<App />, document.getElementById("root"));
