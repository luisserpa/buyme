import React, { Component } from "react";
import { Link } from "react-router-dom";

const Anchor = props => {
  return (
    <p>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </p>
  );
};

class Login extends React.Component {

 
  render() {
  
    return (
      <div>
        <form>
          <input type="email" placeholder="enter your email" />
          <p>
            <input type="password" placeholder="enter your password" />
          </p>
          <p>
            <input href="#" type="submit" value="Login" />
          </p>
          <Anchor />
        </form>

      </div>
    );
  }
}

export { Login };
