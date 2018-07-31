import React, { Component } from 'react';



class SignupFrom extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  }

  render() {
    const { username, email, password } = this.state;
    const { signUp, goToSignIn } = this.props;
    return (
      <div className="login-section">
        <div className="bp3-input-group">
          <i className="zmdi zmdi-account-circle zmdi-hc-2x"></i>
          <input type="text" className="bp3-input bp3-large bp3-fill" placeholder="Username" value={username} onChange={(e) => {
            e.preventDefault();
            this.setState({
              username: e.target.value
            })
          }} />
        </div>
        <div className="bp3-input-group">
          <i className="zmdi zmdi-email zmdi-hc-2x"></i>
          <input type="text" className="bp3-input bp3-large bp3-fill" placeholder="email" value={email} onChange={(e) => {
            e.preventDefault();
            this.setState({
              email: e.target.value
            })
          }} />
        </div>
        <div className="bp3-input-group">
          <i className="zmdi zmdi-key zmdi-hc-2x"></i>
          <input type="password" className="bp3-input bp3-large bp3-fill" placeholder="Password" value={password} onChange={(e) => {
            e.preventDefault();
            this.setState({
              password: e.target.value
            })
          }} />
        </div>
        <div className="buttons-section">
          <a onClick={(e) => {
            goToSignIn();
          }} >Sign in</a>
          <button className="mls-login-button" onClick={() => {
            // alert("clicked");
            signUp(username, email, password);
            this.setState({
              username: '',
              email: '',
              password: '',
            })
          }}> SIGNUP </button>
        </div>
      </div>
    )
  }
}

export default SignupFrom;