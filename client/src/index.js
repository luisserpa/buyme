import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./controller/login.js";
import { Register } from "./controller/register.js";
import { Dashboard } from "./controller/dashboard.js";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard"component={Dashboard} />
      
    </div>
  </Router>,
  document.getElementById("root")
);
