import React, { Component } from 'react';
import { Checkbox } from "@blueprintjs/core";


export default class SigninForm extends Component {

  state = {
    email: '',
    password: ''
  }

  render() {
    const { toggleResetPassword, toggleSignUp } = this.props;
    const { email, password } = this.state;
    return (
      <div className="login-section">
        <div className="bp3-input-group bp3-large">
          <i className="zmdi zmdi-account-circle zmdi-hc-2x"></i>
          <input type="text" className="bp3-input" placeholder="Username or email" value={email} onChange={(e) => {
            e.preventDefault();
            this.setState({
              email: e.target.value
            })
          }} />
        </div>
        <div className="bp3-input-group bp3-large">
          <i className="zmdi zmdi-key zmdi-hc-2x"></i>
          <input type="password" className="bp3-input" placeholder="Password" value={password} onChange={(e) => {
            e.preventDefault();
            this.setState({
              password: e.target.value
            })
          }} />
        </div>
        <div className="buttons-section">
          <Checkbox label="Remember me" />
          <button className="mls-login-button" onClick={() => {
            // alert("clicked");
            addUser(email, password);
            // toggleWelcomePage();
          }}> LOGIN </button>
        </div>
        <div className="register-reset-section">
          <a onClick={(e) => {
            toggleSignUp();
          }} >Register Now</a>
          <a onClick={(e) => {
            toggleResetPassword();
          }} >Forgot Password?</a>
        </div>
      </div>
    )
  }
}