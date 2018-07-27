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
          {/* <Button>
            LOGIN
          </Button> */}
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
      </div>
    )
  }
}

export default LoginAside;