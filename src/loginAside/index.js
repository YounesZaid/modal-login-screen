import React, { Component } from 'react'
import './index.css';

class LoginAside extends Component {
  render() {
    return (
      <div className="login-container">
        <input type="text" placeholder="email"/>
        <input type="password" placeholder="password"/>
      </div>
    )
  }
}

export default LoginAside;