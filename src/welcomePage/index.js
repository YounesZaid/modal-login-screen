import React from 'react';

import './index.css';

const WelcomePage = (props) => (
  <div className='mls-welcome-container'>
    <h1>Welcome to the main Page :) Happy Signin!</h1>
    <div className='mls-welcome-infos'>
      <p>
        Username : <span> Younes Zaid</span>
      </p>
      <p>
        Password : <span> Password </span>
      </p>
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