import React, { useEffect, useState } from 'react';
import './App.css';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from './aurh/signin/loginpage';
import SignUpPage from './aurh/signup/signuppage';
import MainPage from './maincomponents/mainpage';

import AuthService from "./services/auth.header"
import ProtectedRoute from './aurh/authroute';



function App () {

  return (
    <Router>
      <Switch>
        <Route exact={true} path={["/", "/login"]} component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <ProtectedRoute path="/main_page/dashboard" component={MainPage}/>
        <ProtectedRoute path="/main_page/traders_list" component={MainPage}/>
        <ProtectedRoute path="/main_page/users" component={MainPage} />
        <ProtectedRoute path="/main_page/manage_repport" component={MainPage} />
      </Switch>
    </Router>
  )
}

export default App;