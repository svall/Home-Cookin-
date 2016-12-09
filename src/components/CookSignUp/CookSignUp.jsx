import React, { Component } from 'react';

class CookSignUp extends Component {
  constructor(props) {
    super();

    this.state = {
      cookSignUpName: '',
      cookSignUpEmail: '',
      cookSignUpUsername: '',
      cookSignUpPassword: '',
    }
    this.updateSignUpName = this.updateSignUpName.bind(this);
    this.updateSignUpEmail = this.updateSignUpEmail.bind(this);
    this.updateSignUpUsername = this.updateSignUpUsername.bind(this);
    this.updateSignUpPassword = this.updateSignUpPassword.bind(this);
  }

  updateSignUpName(e) {
    console.log(e.target.value)
    this.setState({
      cookSignUpName: e.target.value
    });
  };

  updateSignUpEmail(e) {
    console.log(e.target.value)
    this.setState({
      cookSignUpEmail: e.target.value
    });
  };

  updateSignUpUsername(e) {
    console.log(e.target.value)
    this.setState({
      cookSignUpUsername: e.target.value
    });
  };

  updateSignUpPassword(e) {
    console.log(e.target.value)
    this.setState({
      cookSignUpPassword: e.target.value
    });
  };


  render() {
    return (
      <container>
        <h1> COOK SIGN UP </h1>

        <div className="signup-container">

          <div className="signup-name-div">
            <label> Name: </label>
            <input
              className="signup name"
              type="text"
              placeholder="Enter Name"
              value={this.state.cookSignUpName}
              onChange={this.updateSignUpName}
            />
          </div>

          <div className="signup-email-div">
            <label> Email: </label>
            <input
              className="signup email"
              type="text"
              placeholder="Enter Email"
              value={this.state.cookSignUpEmail}
              onChange={this.updateSignUpEmail}
            />
          </div>

          <div className="signup-username-div">
            <label> Username: </label>
            <input
              className="signup username"
              type="text"
              placeholder="Enter Username"
              value={this.state.cookSignUpUsername}
              onChange={this.updateSignUpUsername}
            />
          </div>

          <div className="signup-password-div">
            <label> Password: </label>
            <input
              className="signup password"
              type="text"
              placeholder="Enter Password"
              value={this.state.cookSignUpPassword}
              onChange={this.updateSignUpPassword}
            />
          </div>

        </div>

      </container>
    )
  }
}

export default CookSignUp;
