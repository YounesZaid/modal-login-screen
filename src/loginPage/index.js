import React, { Component } from 'react'
import LoginAside from '../loginAside';
import BackgroundAside from '../backgroundAside';

class LoginPage extends Component {

  render() {
    return [
      <LoginAside key={0} />,
      <BackgroundAside key={1} />
    ]
  }
}

export default LoginPage;
