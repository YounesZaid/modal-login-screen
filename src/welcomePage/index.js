import React from 'react';
import * as firebase from "firebase";
import './index.css';

let user = firebase.auth().currentUser;
const WelcomePage = (props) => (
  <div className='mls-welcome-container'>
    <h1>Welcome to the main Page :) Happy Signin!</h1>
    <div className='mls-welcome-infos'>
      <i className="zmdi zmdi-account zmdi-hc-3x">
      <span>{firebase.auth().currentUser.displayName}</span>
      </i>
      <i className="zmdi zmdi-email zmdi-hc-3x">
      <span>{firebase.auth().currentUser.email}</span>
      </i>
    </div>
    <button className='mls-welcome-button' onClick={() => {
      // alert(JSON.stringify(user));
      props.signOut();
    }}>
      Go Out
    </button>
  </div>
)

export default WelcomePage;