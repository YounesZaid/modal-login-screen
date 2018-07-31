import React, { Component } from 'react';
import { db } from '../db';

import './index.css';
import WelcomePage from '../welcomePage';
import SigninForm from './SigninForm';
import SignupFrom from './SignupForm';

class LoginAside extends Component {

  state = {
    selectedTab: 'signIn',
    welcomePage: false,
    isError: false,
    messageError: 'Error or Something else',
  }

  toggleWelcomePage = () => {
    this.setState({
      welcomePage: !this.state.welcomePage
    })
  };

  toggleSignIn = () => {
    this.setState({
      selectedTab: 'signIn'
    })
  };

  toggleSignUp = () => {
    this.setState({
      selectedTab: 'signUp'
    })
  };

  toggleResetPassword = () => {
    this.setState({
      selectedTab: 'resetPassword'
    })
  };

  addUser = (email, password) => {
    db.collection('users').add({
      email,
      password,
    }).then(docRef => {
      // alert('Added : ' +docRef);
      this.toggleWelcomePage();
    }).catch(error => {
      alert(error);
    });
  }



  render() {
    const { selectedTab, welcomePage, messageError, isError } = this.state;
    if (welcomePage) {
      return (
        <div className='authentification-container'>
          <WelcomePage goToLoginForm={this.toggleWelcomePage} />
        </div>
      )
    } else {
      return (
        <div className="authentification-container">
          <div className='mls-wrapper'>
            {isError && <div className='mls-message-error'>
              <p>{messageError}</p>
            </div>}
            {selectedTab === 'signIn' && <SigninForm toggleSignUp={this.toggleSignUp} toggleResetPassword={this.toggleResetPassword} toggleWelcomePage={this.toggleWelcomePage} addUser={this.addUser} />}
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
              <button className='mls-social-btn facebook' onClick={() => {
                this.toggleWelcomePage();
              }} >
                <i className="zmdi zmdi-facebook-box zmdi-hc-2x"></i>
                <span>LOGIN WITH FACEBOOK</span>
              </button>
              <button className='mls-social-btn twitter' onClick={() => {
                this.toggleWelcomePage();
              }}>
                <i className="zmdi zmdi-twitter zmdi-hc-2x"></i>
                <span>LOGIN WITH TWITTER</span>
              </button>
              <button className='mls-social-btn gplus' onClick={() => {
                this.toggleWelcomePage();
              }}>
                <i className="zmdi zmdi-google-plus zmdi-hc-2x"></i>
                <span>LOGIN WITH GOOGLE</span>
              </button>
            </div>
          </div>
        </div>
      )
    }

  }
}

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

export default LoginAside;

