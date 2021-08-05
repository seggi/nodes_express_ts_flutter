import React from 'react';
import './App.css';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from './aurh/signin/loginpage';
import SignUpPage from './aurh/signup/signuppage';
import MainPage from './maincomponents/mainpage';
import Dashboard from './maincomponents/dashboard';
import TrafficList from './maincomponents/traderslist';



function App () {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/main_page/dashboard" component={MainPage}/>
          <Route path="/main_page/traders_list" component={MainPage}/>
        </Switch>
      </Router>
    )
}

export default App;