import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./controller/login.js";
import { Register } from "./controller/register.js";
import { DashboardSeller } from "./controller/seller/dashboard.js";
import {SellerMap} from "../src/controller/seller/map";

class App extends React.Component {

  onRender = () => {
    let sessionUser = localStorage.getItem("sessionUser");
    if (sessionUser === "undefined") {
      return (
        
        <Router>
          <h1>ola</h1>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/seller/dashboard" component={Login} />

          </div>
        </Router>
      )
    } else {
      return (
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/seller/dashboard" component={DashboardSeller} />
            <Route exact path="/seller/map" component={SellerMap} />

          </div>
        </Router>
      )

    }
  }

  render() {
    console.log("ON RENDER: ", this.onRender());
    return (
      <div>
        {this.onRender()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root")
);
