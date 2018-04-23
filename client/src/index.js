import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./controller/login.js";
import { Register } from "./controller/register.js";
import { DashboardSeller } from "./controller/seller/dashboard.js";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/seller/dashboard"component={DashboardSeller} />
      
    </div>
  </Router>,
  document.getElementById("root")
);
