import React, { Component } from "react";
import { Link } from "react-router-dom";


import "../../style/auth_style.css";

import { htmlLabels } from "../datas";


class LoginPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-box">
                    <div className="container-box__row">
                        <div className="container-box__left">
                            <div className="container-box__column">
                                <div className="container-box__title">
                                    <h2>{htmlLabels.siteTitle}</h2>
                                </div>

                                <div className="container-box__formbox">
                                    <div className="item-box">
                                        <div className="item-box__title">
                                            <h4>{ htmlLabels.formTitle }</h4>
                                        </div>
                                        <div className="form-item__box">
                                            <div className="form-items">
                                                <span className="labeltitle">{htmlLabels.inputUsername}</span>
                                                <input type="text" placeholder={htmlLabels.inputUsername} />
                                            </div>
                                            <div className="form-items">
                                                <span className="labeltitle">{htmlLabels.inputPassword}</span>
                                                <input type="text" placeholder={htmlLabels.inputPassword} />
                                            </div>

                                            <div className="btnLogin">
                                                <Link to='/main-page'>
                                                    {htmlLabels.btnlogin}
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to='/signup' >
                                                {htmlLabels.btnToSignup}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-box__right">
                            <div className="content-box__image">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;