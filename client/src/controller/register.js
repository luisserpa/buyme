import React, { Component } from "react";
import { Link } from "react-router-dom";

let userData;

const Button = () => {
  return (
    <div>
      <p>
        <input type="submit" value="Create Count" />
      </p>
    </div>
  );
};

const Input = props => {
  var value = props.stateValues;
  var onChange = props.handleInputChange;
  return (
    <div>
      <p>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          value={value.email}
          onChange={onChange}
        />
      </p>
      <p>
        <input
          type="text"
          name="displayName"
          placeholder="your display name"
          value={value.diplayName}
          onChange={onChange}
        />
      </p>
      <p>
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          value={value.password}
          onChange={onChange}
        />
      </p>
      <p>
        <input
          type="password"
          name="retypePassword"
          placeholder="repeat your password"
          value={value.retypePassword}
          onChange={onChange}
        />
      </p>
    </div>
  );
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      displayName: "",
      password: "",
      retypePassword: ""
    };
  }

  handleInputChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  render() {
    userData = this.state;
    return (
      <div>
        <form>
          <Input
            handleInputChange={this.handleInputChange}
            stateValues={this.state}
          />
          <Button />
        </form>
      </div>
    );
  }
}

export { Register, userData };
