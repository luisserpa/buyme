import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FlashMessage } from "../flash-messages";
import addUser from "../../../server/services/user-service";
import verification from "../../../server/services/verification-service";

let userData;
/*
let flashMessageStatus = {
  showMessage: false,
  message: "",
  addUser: false
};
*/

const Button = (props) => {
  var userData = props.userData;

  //define the create user function
  function createUser() {
    //first run a verification on the introduced data
    props.updtateMessageStatus = verification(userData);
    if (verification(userData).addUser === true) {
      addUser(userData);
    }

  }

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
  }

  handleInputChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  myCallback = (dataFromChild) => {
    this.setState({ flashMessageStatus: dataFromChild });
  };

  render() {
    userData = this.state;
    console.log("STATUS IN REGISTER: ", this.state.flashMessageStatus);
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
          messageStatus={this.state.flashMessageStatus}
          updtateMessageStatus={this.myCallBack} />
        <FlashMessage status={this.state.flashMessageStatus} />
      </div>
    );
  }
}

export { Register, userData };
