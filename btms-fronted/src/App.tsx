import React from 'react';
import './App.css';


import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import LoginPage from './aurh/signin/loginpage';
import SignUpPage from './aurh/signup/signuppage';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="signin"></Link>
            <Link to="signup"></Link>
          </nav>
          <Switch>
            <Route exact={true} path="/" component={LoginPage}></Route>
            <Route exact path="/signup" component={SignUpPage}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;