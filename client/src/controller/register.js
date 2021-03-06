import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FlashMessage, onChange } from "../flash-messages";
import userService from "../service/user-service";
import verification from "../../../imports/verification/verification-register";

let userData;

const Button = (props) =>  {


  //define the create user function
  function createUser() {

    var userData = props.userData;
    var messageStatus="";

    verification.userVerification(userData, userService)
      .then(res => {
        messageStatus = res;

        if (messageStatus.addUser === true) {
          var newUser = {
            username: userData.username,
            email: userData.email,
            password: userData.password
          };


          userService.addUser(newUser);

        };

        props.onClick(messageStatus);

        if (messageStatus.addUser === true) {
          window.location.replace("/");
        }


      });

  };



    return (
      <div>

        <p>

          <input type="submit" value="Create Count" onClick={createUser} />

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
          name="username"
          placeholder="your display name"
          value={value.username}
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
      username: "",
      password: "",
      retypePassword: "",
      flashMessageStatus: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleInputChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onClick = data => {
    this.setState({ flashMessageStatus: data });
    console.log("FLASH MESSAGE STATUS: ", this.state.flashMessageStatus);
  };

  //To timeout the flash message
  onChange = () => {

    onChange(this);
  }

  render() {
    userData = this.state;
    return (
      <div>
        <form>
          <Input
            handleInputChange={this.handleInputChange}
            stateValues={this.state}
          />

        </form>

        <Button
          userData={this.state}
          onClick={this.onClick} />

        <FlashMessage
          status={this.state.flashMessageStatus}
          onChange={this.onChange} />
      </div>
    );
  }
}

export { Register, userData };
