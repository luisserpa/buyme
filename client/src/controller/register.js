import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FlashMessage} from "../flash-messages";
import addUser from "../../../server/services/user-service";
import verification from "../../../server/services/verification-service";

let userData;

const Button = (props) => {
  var userData=props.userData;

  //define the create user function
  function createUser(){
    //first run a verification on the introduced data
    verification(userData);
    console.log("DATA IN REGISTER: ",userData);
    addUser(userData);
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
      <Button 
            userData={value}/>
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
        </form>
        <FlashMessage />
      </div>
    );
  }
}

export { Register, userData };
