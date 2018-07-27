import React, { Component } from 'react';
import { Button } from "@blueprintjs/core";

import './index.css';

class LoginAside extends Component {

  state = {
    disabled: false,
    large: false,
    showPassword: false,
  }

  render() {
    return (
      <div className="login-container">
        <div className="bp3-input-group bp3-intent-primary">
          <span className="bp3-icon bp3-icon-lock"></span>
          <input type="email" className="bp3-input" placeholder="Filter histogram..." />
        </div>
        <div className="bp3-input-group .modifier">
          <span className="bp3-icon bp3-icon-search"></span>
          <input type="text" className="bp3-input" placeholder="Search" />
          <button className="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right" ></button>
        </div>

        <Button intent="primary" text="button content" onClick={() => { alert("clicked") }} />
      </div>
    )
  }
}

export default LoginAside;