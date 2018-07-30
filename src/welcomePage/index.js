import React from 'react';

import './index.css';

const WelcomePage = (props) => (
  <div className='mls-welcome-container'>
    <h1>Welcome to the main Page :) Happy Signin!</h1>
    <div className='mls-welcome-infos'>
      <i className="zmdi zmdi-account zmdi-hc-3x">
      <span> Younes Zaid</span>
      </i>
      <i className="zmdi zmdi-key zmdi-hc-3x">
      <span> Password </span>
      </i>
    </div>
    <button className='mls-welcome-button' onClick={() => {
      // alert("clicked");
      props.goToLoginForm();
    }}>
      Go Out
    </button>
  </div>
)

export default WelcomePage;