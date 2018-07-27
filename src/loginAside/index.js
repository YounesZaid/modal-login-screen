import React, { Component } from 'react';
import { Checkbox } from "@blueprintjs/core";

import './index.css';

class LoginAside extends Component {

  state = {
    disabled: false,
    large: false,
    showPassword: false,
  }

  render() {
    return (
      <div className="authentification-container">
        <div className="login-section">
          <div className="bp3-input-group email-input">
            <i className="zmdi zmdi-account-circle zmdi-hc-2x"></i>
            <input type="text" className="bp3-input bp3-large bp3-fill" placeholder="Username or email" />
          </div>
          <div className="bp3-input-group password-input">
            <i className="zmdi zmdi-key zmdi-hc-2x"></i>
            <input type="password" className="bp3-input bp3-large bp3-fill" placeholder="Password" />
          </div>
        </div>
        <div className="buttons-section">
          <Checkbox checked={this.state.isEnabled} label="Remember me" onChange={this.handleEnabledChange} />
          <button className="login-button" onClick={() => {
            alert("clicked");
          }}> LOGIN </button>
        </div>
        <div className="register-reset-section">
          <a onClick={() => {

          }} >Register Now</a>
          <a onClick={() => {

          }} >Forgot Password?</a>
        </div>
        <div className="separator-section">
          <hr />
          <p>Or</p>
          <hr />
        </div>
        <div className="auth-section">
          <div className="fb-button">
            <i class="zmdi zmdi-facebook-box zmdi-hc-2x"></i>
            <button>LOGIN WITH FACEBOOK</button>
          </div>
          <div className="twitter-button">
            <i class="zmdi zmdi-twitter zmdi-hc-2x"></i>
            <button>LOGIN WITH TWITTER</button>
          </div>
          <div className="google-button">
            <i class="zmdi zmdi-google-plus zmdi-hc-2x"></i>
            <button>LOGIN WITH GOOGLE</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginAside;