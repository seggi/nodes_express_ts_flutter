import React, { Component } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Dashboard from "./dashboard";
import TrafficList from "./traderslist";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSignOutAlt, faUser, faPeopleArrows, faBusinessTime, faHome, faToolbox } from '@fortawesome/free-solid-svg-icons'
import '@progress/kendo-theme-default/dist/all.css';

import { htmlLabels } from "../aurh/datas";
import "../style/mainpage_style.css";



function MainPage (){
        const { path, url } =  useRouteMatch();
        console.log(path, url)
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
                                    <Link to="/login" className="btn-logout">
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
                                    <Link to={`/main_page/traders_list/${23}`} className="btn-menu">
                                        <span >
                                            <FontAwesomeIcon icon={ faPeopleArrows } />
                                        </span>
                                    </Link>
                                    <Link to="/login" className="btn-menu">
                                        <span >
                                            <FontAwesomeIcon icon={ faUser } />
                                        </span>
                                    </Link>
                                    <Link to="/login" className="btn-menu">
                                        <span >
                                            <FontAwesomeIcon icon={ faBusinessTime } />
                                        </span>
                                    </Link>

                                    <Link to="/login" className="btn-menu" style={{ color: '#333' }}>
                                        <span >
                                            <FontAwesomeIcon icon={ faToolbox } />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            
                            <Route path={`/main_page/dashboard`} >
                                <Dashboard />
                            </Route>
                            <Route path={`/main_page/traders_list/:ids`}>
                                <TrafficList />
                            </Route>
                        </div>
                    </div>
                </div>
               
            </>
        )
    
}

export default MainPage;