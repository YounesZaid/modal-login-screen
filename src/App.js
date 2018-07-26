import React, { Component } from 'react';
import LoginAside from './loginAside';
import BackgroundAside from './backgroundAside';



class App extends Component {
  render() {
    return (
      <div id="screen-wrapper">
        <LoginAside />
        <BackgroundAside />
      </div>
    );
  }
}

export default App;
