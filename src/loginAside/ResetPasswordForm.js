import React, { Component } from 'react'


export default class ResetPasswordForm extends Component {

  state = {
    email: '',
  }
  render() {
    const { email } = this.state;
    const { resetPassword, goToSignIn } = this.props;
    return (
      <div className="login-section">
        <div className="bp3-input-group">
          <i className="zmdi zmdi-email zmdi-hc-2x"></i>
          <input type="text" className="bp3-input bp3-large bp3-fill" placeholder="email" value={email} onChange={(e) => {
            e.preventDefault();
            this.setState({
              email: e.target.value
            })
          }} />
        </div>
        <div className="buttons-section">
          <a onClick={(e) => {
            goToSignIn();
          }} >Sign in</a>
          <button className="mls-login-button" onClick={() => {
            resetPassword(email);
            this.setState({
              email: ''
            })
          }}>RESET</button>
        </div>
      </div>
    )
  }
}