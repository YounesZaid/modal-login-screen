import React, { Component } from 'react';


const SignupFrom = (props) => (
  <div className="login-section">
    <div className="bp3-input-group">
      <i className="zmdi zmdi-account-circle zmdi-hc-2x"></i>
      <input type="text" className="bp3-input bp3-large bp3-fill" placeholder="Username" />
    </div>
    <div className="bp3-input-group">
      <i className="zmdi zmdi-email zmdi-hc-2x"></i>
      <input type="text" className="bp3-input bp3-large bp3-fill" placeholder="email" />
    </div>
    <div className="bp3-input-group">
      <i className="zmdi zmdi-key zmdi-hc-2x"></i>
      <input type="password" className="bp3-input bp3-large bp3-fill" placeholder="Password" />
    </div>
    <div className="buttons-section">
      <a onClick={(e) => {
        props.toggleSignIn();
      }} >Sign in</a>
      <button className="mls-login-button" onClick={() => {
        alert("clicked");
      }}> SIGNUP </button>
    </div>
  </div>
)

export default SignupFrom;