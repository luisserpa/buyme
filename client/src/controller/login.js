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

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    console.log("HELLO");
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
        <h2>{this.state.response}</h2>
      </div>
    );
  }
}

export { Login };
