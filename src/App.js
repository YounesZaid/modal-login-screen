import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import LoginPage from './loginPage';
import WelcomePage from './welcomePage';


class App extends Component {
  render() {
    return (
      <Router>
        <div id="screen-wrapper">
          <Switch>
            <Route path="/welcome" component={WelcomePage} />
            <Route path="/login" component={LoginPage} />
            <Route>
              <Redirect to='/login' />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
