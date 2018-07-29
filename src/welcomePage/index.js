import React from 'react';
import { withRouter } from 'react-router-dom';

import './index.css';

const WelcomePage = (props) => (
  <div className='mls-welcome'>
    <div className='mls-welcome-content'>
      <h1>Welcome to the main Page, Happy Signin!</h1>
      <div className='mls-welcome-infos'>
        <p>
          Username : <span> Younes Zaid</span>
        </p>
        <p>
          Password : <span> Password </span>
        </p>
      </div>
      <button onClick={() => {
        props.history.push('/login');
      }}>
        Go Out
      </button>
    </div>
  </div>
)

export default withRouter(WelcomePage);