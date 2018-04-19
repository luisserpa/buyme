import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FlashMessage, onChange } from "../flash-messages";
import verification from "../../../imports/verification/verification-login";
import userService from "../service/user-service";

let userData;

const Anchor = props => {
  return (
    <p>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </p>
  );
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.userData;
    this.onClick = this.props.onClick;
  }
  
  authenticate = () => {

    var user = this.props.userData;

    verification.authenticate(user, userService)
      .then(res => {
        this.setState({flashMessageStatus:res});

        this.onClick(this.state.flashMessageStatus);

        //if it passed all the authentications
        if (res.isUser === true) {
          //goes to the dashboard
          window.location.replace("/dashboard");
        }
      })
  };
  

  render() {
    return (
      <div>
        <p>
          <input type="submit" value="Login" onClick={this.authenticate} />
        </p>
      </div>
    )
  }



}

const Input = (props) => {

  var value = props.userData;
  var onChange = props.handleInputChange;

  return (
    <div>
      <input type="email"
        name="email"
        value={value.email}
        onChange={onChange}
        placeholder="enter your email" />
      <p>
        <input type="password"
          name="password"
          value={value.password}
          onChange={onChange}
          placeholder="enter your password" />
      </p>
    </div>
  )
}

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      flashMessageStatus: {}
    }
  };

  handleInputChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onChange = () => {
    onChange(this);
  }

  onClick = data => {
    console.log("DATA: ",data);
    this.setState({ flashMessageStatus: data });
  };

  render() {
    userData = this.state;
    console.log("STATE: ", userData);
    return (
      <div>
        <form>

          <Input handleInputChange={this.handleInputChange}
            userData={userData} />

        </form>

        <Button userData={this.state}
            onClick={this.onClick} />

          <Anchor />

        <FlashMessage
          status={this.state.flashMessageStatus}
          onChange={this.onChange} />

      </div>
    );
  }
}

export { Login };
