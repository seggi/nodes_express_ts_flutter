import React, { Component, useEffect, useState } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Dashboard from "./dashboard";
import TrafficList from "./traderslist";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSignOutAlt, faUser, faPeopleArrows, faBusinessTime, faHome, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import '@progress/kendo-theme-default/dist/all.css';

import { htmlLabels } from "../aurh/datas";
import "../style/mainpage_style.css";
import ManaUsers from "./users/manageusers";
import MangeRepport from "./repport/managerepport";

import AuthService from "../services/auth.header";
import { authFetch, logout } from "../aurh/protected";



function MainPage (){
        const { path, url } =  useRouteMatch();
        const [currentUser, setCurrentUser] = useState(undefined);
        const [loggedin, setLoggedin] = useState("")

        useEffect(() => {
            authFetch("http://localhost:5000/api/nk",{
                method: "GET",
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(r => r.json())
            .then(result => {
                console.log(result)
                setLoggedin(result)
            })
        }, [])
    

        return (
            <>
                 <div className="container">
                    <div className="main-container-box">
                        <div className="main-container-box__row">
                            <div className="first-item_box__column">
                                <div className="inner-first_box__column">
                                    <div className="main-container-box__title">
                                        <h2>{htmlLabels.siteTitle}</h2>
                                    </div>
                                    <Link to="/login" onClick={() => logout() } className="btn-logout">
                                        <span >
                                            <FontAwesomeIcon icon={ faSignOutAlt} />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="second-item_box">
                                <div className="sencond-item_box__column">
                                    <div className="profile-image">
                                        <img src={htmlLabels.rightSideImage} alt="" />
                                    </div>
                                    <Link to={`/main_page/dashboard`} className="btn-menu active">
                                        <span >
                                            <FontAwesomeIcon icon={ faHome } />
                                        </span>
                                    </Link>
                                    <Link to={`/main_page/traders_list/`} className="btn-menu">
                                        <span >
                                            <FontAwesomeIcon icon={ faPeopleArrows } />
                                        </span>
                                    </Link>
                                    <Link to="/main_page/users" className="btn-menu">
                                        <span >
                                            <FontAwesomeIcon icon={ faUser } />
                                        </span>
                                    </Link>
                                    <Link to="/main_page/manage_repport" className="btn-menu">
                                        <span >
                                            <FontAwesomeIcon icon={ faBusinessTime } />
                                        </span>
                                    </Link>

                                    <Link to="/login" className="btn-menu" style={{ color: '#333' }}>
                                        <span >
                                            <FontAwesomeIcon icon={ faUserEdit } />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            
                            <Route path={`/main_page/dashboard`} >
                                <Dashboard />
                            </Route>
                            <Route path={`/main_page/traders_list`}>
                                <TrafficList />
                            </Route>

                            <Route path={`/main_page/users`}>
                                <ManaUsers />
                            </Route>

                            <Route path={`/main_page/manage_repport`}>
                                <MangeRepport />
                            </Route>

                        </div>
                    </div>
                </div>
               
            </>
        )
    
}

export default MainPage;