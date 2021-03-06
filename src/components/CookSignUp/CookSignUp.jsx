import React, { Component } from 'react';
import './CookSignUp.css';

class CookSignUp extends Component {
  constructor(props) {
    super();

    this.state = {
      cookSignUpName: '',
      cookSignUpEmail: '',
      cookSignUpUsername: '',
      cookSignUpPassword: '',
      cookSignUpNeighborhood: '',
      cookSignUpAddress: ''
    }

    this.updateSignUpName = this.updateSignUpName.bind(this);
    this.updateSignUpEmail = this.updateSignUpEmail.bind(this);
    this.updateSignUpUsername = this.updateSignUpUsername.bind(this);
    this.updateSignUpPassword = this.updateSignUpPassword.bind(this);
    this.updateSignUpNeighborhood = this.updateSignUpNeighborhood.bind(this);
    this.updateSignUpAddress = this.updateSignUpAddress.bind(this);
    this.handleCookCreation = this.handleCookCreation.bind(this);
  }

  // updates cook sign up information to state
  updateSignUpName(e) {
    this.setState({
      cookSignUpName: e.target.value
    });
  };

  updateSignUpEmail(e) {
    this.setState({
      cookSignUpEmail: e.target.value
    });
  };

  updateSignUpUsername(e) {
    this.setState({
      cookSignUpUsername: e.target.value
    });
  };

  updateSignUpPassword(e) {
    this.setState({
      cookSignUpPassword: e.target.value
    });
  };

  updateSignUpAddress(e) {
    this.setState({
      cookSignUpAddress: e.target.value
    });
  };

  updateSignUpNeighborhood(e) {
    this.setState({
      cookSignUpNeighborhood: e.target.value
    });
  };


  // creates a new cook user with the information in state
  handleCookCreation() {
    console.log('starting fetch');
    fetch('/cooks', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.cookSignUpName,
        email: this.state.cookSignUpEmail,
        username: this.state.cookSignUpUsername,
        password: this.state.cookSignUpPassword,
        neighborhood: this.state.cookSignUpNeighborhood,
        address: this.state.cookSignUpAddress
      })
    })
    .then(() => {
      this.setState({
        cookSignUpName: '',
        cookSignUpEmail: '',
        cookSignUpUsername: '',
        cookSignUpPassword: '',
        cookSignUpNeighborhood: '',
        cookSignUpAddress: ''
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <container className="signup-page">

        <div className="signup-content">

          <div className="cook-signup-header">
            <h1 className="signup-title"> COOK SIGN UP </h1>
          </div>

          <div className="signup-container">
            <div className="signup-second-container">

              <div className="signup-input-div">
                <label> Name: </label>
                <input
                  className="signup-input name"
                  type="text"
                  placeholder="Enter Name"
                  value={this.state.cookSignUpName}
                  onChange={this.updateSignUpName}
                />
              </div>

              <div className="signup-input-div">
                <label> Address: </label>
                <input
                  className="signup-input address"
                  type="text"
                  placeholder="Enter address"
                  value={this.state.cookSignUpAddress}
                  onChange={this.updateSignUpAddress}
                />
              </div>

              <div className="signup-input-div">
                <label> Neighborhood: </label>
                <input
                  className="signup-input neighborhood"
                  type="text"
                  placeholder="Enter Neighborhood"
                  value={this.state.cookSignUpNeighborhood}
                  onChange={this.updateSignUpNeighborhood}
                />
              </div>

              <div className="signup-input-div">
                <label> Email: </label>
                <input
                  className="signup-input email"
                  type="text"
                  placeholder="Enter Email"
                  value={this.state.cookSignUpEmail}
                  onChange={this.updateSignUpEmail}
                />
              </div>

              <div className="signup-input-div">
                <label> Username: </label>
                <input
                  className="signup-input username"
                  type="text"
                  placeholder="Enter Username"
                  value={this.state.cookSignUpUsername}
                  onChange={this.updateSignUpUsername}
                />
              </div>

              <div className="signup-input-div">
                <label> Password: </label>
                <input
                  className="signup-input password"
                  type="text"
                  placeholder="Enter Password"
                  value={this.state.cookSignUpPassword}
                  onChange={this.updateSignUpPassword}
                />
              </div>

              <div className="button-container">
                <button onClick={this.handleCookCreation}>Sign Up</button>
              </div>

            </div>
          </div>

        </div>

        <div className="signup-photo-div">
          {/*photo taken from The Body Book*/}
        </div>

      </container>
    )
  }
}

export default CookSignUp;
