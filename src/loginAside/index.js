import React, { Component } from 'react';
import { Checkbox, Tooltip, Button, Intent } from "@blueprintjs/core";
import { withRouter } from 'react-router-dom';

import './index.css';

class LoginAside extends Component {

  state = {
    selectedTab: 'signIn',
  }

  toggleSignIn = () => {
    this.setState({
      selectedTab: 'signIn'
    })
  }

  toggleSignUp = () => {
    this.setState({
      selectedTab: 'signUp'
    })
  }

  toggleResetPassword = () => {
    this.setState({
      selectedTab: 'resetPassword'
    })
  }

  render() {
    const { selectedTab } = this.state;
    const { history } = this.props;
    return (
      <div className="authentification-container">
        <div className='mls-wrapper'>
          {selectedTab === 'signIn' && <SigninForm toggleSignUp={this.toggleSignUp} toggleResetPassword={this.toggleResetPassword} history={history} />}
          {selectedTab === 'signUp' && <SignupFrom toggleSignIn={this.toggleSignIn} />}
          {selectedTab === 'resetPassword' && <ResetPassword toggleSignIn={this.toggleSignIn} />}
          {/* <div className="separator-section">
            <hr />
            <p>Or</p>
            <hr />
          </div> */}
          <hr className='mls-separator' />
          <div className="auth-section">
            {/* <div className="fb-button bbbtn">
              <i className="zmdi zmdi-facebook-box zmdi-hc-2x"></i>
              <button className='button'>LOGIN WITH FACEBOOK</button>
            </div>
            <div className="twitter-button bbbtn">
              <i className="zmdi zmdi-twitter zmdi-hc-2x"></i>
              <button className='button'>LOGIN WITH TWITTER</button>
            </div>
            <div className="google-button bbbtn">
              <i className="zmdi zmdi-google-plus zmdi-hc-2x"></i>
              <button className='button'>LOGIN WITH GOOGLE</button>
            </div> */}
            <button className='mls-social-btn facebook'>
              <i className="zmdi zmdi-facebook-box zmdi-hc-2x"></i>
              <span>LOGIN WITH FACEBOOK</span>
            </button>
            <button className='mls-social-btn twitter'>
              <i className="zmdi zmdi-twitter zmdi-hc-2x"></i>
              <span>LOGIN WITH TWITTER</span>
            </button>
            <button className='mls-social-btn gplus'>
              <i className="zmdi zmdi-google-plus zmdi-hc-2x"></i>
              <span>LOGIN WITH GOOGLE</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

class SigninForm extends Component {

  state = {
    disabled: false,
    large: true,
    showPassword: false
  }

  handleLockClick = () => this.setState({ showPassword: !this.state.showPassword });

  lockButton = () => (
    <Tooltip content={`${this.state.showPassword ? "Hide" : "Show"} Password`} disabled={this.state.disabled}>
      <Button
        disabled={this.state.disabled}
        icon={this.state.showPassword ? "unlock" : "lock"}
        intent={Intent.PRIMARY}
        minimal={true}
        onClick={this.handleLockClick}
      />
    </Tooltip>
  );

  render() {
    // const { disabled, large, showPassword } = this.state;
    const { toggleResetPassword, toggleSignUp, history } = this.props;
    return (
      <div className="login-section">
        <div className="bp3-input-group bp3-large">
          <i className="zmdi zmdi-account-circle zmdi-hc-2x"></i>
          <input type="text" className="bp3-input" placeholder="Username or email" />
        </div>
        <div className="bp3-input-group bp3-large">
          <i className="zmdi zmdi-key zmdi-hc-2x"></i>
          <input type="password" className="bp3-input" placeholder="Password" />
        </div>
        {/* <div>
          <InputGroup
            disabled={disabled}
            large={large}
            placeholder="Enter your password..."
            rightElement={<this.lockButton />}
            type={showPassword ? "text" : "password"}
          />
        </div> */}
        <div className="buttons-section">
          <Checkbox label="Remember me" />
          <button className="mls-login-button" onClick={() => {
            // alert("clicked");
            history.push('/welcome');
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

const ResetPassword = (props) => (
  <div className="login-section">
    <div className="bp3-input-group">
      <i className="zmdi zmdi-email zmdi-hc-2x"></i>
      <input type="text" className="bp3-input bp3-large bp3-fill" placeholder="email" />
    </div>
    <div className="buttons-section">
      <a onClick={(e) => {
        props.toggleSignIn();
      }} >Sign in</a>
      <button className="mls-login-button" onClick={() => {
        alert("clicked");
      }}>RESET</button>
    </div>
  </div>
)

export default withRouter(LoginAside);

