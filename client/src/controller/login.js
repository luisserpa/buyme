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

const Button = (props) => {

  function authenticate (){

    var user = props.userData;
    var messageStatus = "";

    verification.authenticate(user, userService)
      .then(res => {
        messageStatus = res;

        props.onClick(messageStatus);

        //if it passed all the authentications
        if (messageStatus.isUser === true) {
          //goes to the dashboard
          window.location.replace("/dashboard");
        }
      })
  };

    return (
      <div>
        <p>
          <input type="submit" value="Login" onClick={authenticate} />
        </p>
      </div>
    )
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
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
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
