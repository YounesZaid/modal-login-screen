import React, { Component } from 'react';
import { db } from '../db';
import * as firebase from "firebase";

import './index.css';
import WelcomePage from '../welcomePage';
import SigninForm from './SigninForm';
import SignupFrom from './SignupForm';
import ResetPasswordForm from './ResetPasswordForm';

const auth = firebase.auth();

class LoginAside extends Component {

  state = {
    selectedTab: 'signIn',
    welcomePage: false,
    isError: false,
    messageError: '',
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

  handleSignIn = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then((data) => {
      // alert('Success !' +JSON.stringify(data));
      this.setState({
        isError: false
      })
      this.toggleWelcomePage();
    })
      .catch((error) => {
        // Handle Errors here.
        // var errorCode = error.code;
        const messageError = error.message;
        // ...
        this.setState({
          isError: true,
          messageError
        })
        // if (errorCode === 'auth/wrong-password') {
        //   alert('Wrong password.');
        // } else {
        //   alert(errorMessage);
        // }
      });
  }

  handleSignOut = () => {
    auth.signOut().then(() => {
      alert("See u again");
      this.toggleWelcomePage();
    })
      .catch((error) => {
        alert('Error while disconnecting : ' + error)
      });
  }

  handleSignUp = (username, email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Success
        let user = auth.currentUser;
        user.updateProfile({
          displayName: username,
        }).then(() => {
          // Update successful.
          console.log('==> updated');
        }).catch((error) => {
          // An error happened.
          console.log('===> error updating'+error)
        });
        this.toggleSignIn();
      }).catch((error) => {
        // An error happened.
        this.setState({
          isError: true,
          messageError: error.message
        })
      });
  }

  handleResetPassword = (email) => {
    auth.sendPasswordResetEmail(email).then(() => {
      // Email sent.
      this.setState({
        isError: false
      })
      alert('an email has been sent to you with password reset instructions');
    }).catch((error) => {
      // An error happened.
      var errorMessage = error.message;
      this.setState({
        isError: true,
        errorMessage
      })
    });
  }
  



  render() {
    const { selectedTab, welcomePage, messageError, isError } = this.state;
    if (welcomePage) {
      return (
        <div className='authentification-container'>
          <WelcomePage goToLoginForm={this.toggleWelcomePage} signOut={this.handleSignOut} />
        </div>
      )
    } else {
      return (
        <div className="authentification-container">
          <div className='mls-wrapper'>
            {isError && <div className='mls-message-error'>
              <p>{messageError}</p>
            </div>}
            {selectedTab === 'signIn' && <SigninForm toggleSignUp={this.toggleSignUp} toggleResetPassword={this.toggleResetPassword} toggleWelcomePage={this.toggleWelcomePage} handleSignIn={this.handleSignIn} />}
            {selectedTab === 'signUp' && <SignupFrom goToSignIn={this.toggleSignIn} signUp={this.handleSignUp} />}
            {selectedTab === 'resetPassword' && <ResetPasswordForm goToSignIn={this.toggleSignIn} resetPassword={this.handleResetPassword} />}
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

export default LoginAside;

