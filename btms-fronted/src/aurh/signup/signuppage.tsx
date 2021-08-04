import React, { Component } from "react";
import { Link } from "react-router-dom";

import { htmlLabels } from "../datas";

class SignUpPage extends Component {
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

                                <div className="container-box__formbox" style={{ marginTop: "-100px"}}>
                                    <div className="item-box">
                                        <div className="item-box__title">
                                            <h4>{ htmlLabels.formTitleOne }</h4>
                                        </div>
                                        <div className="form-item__box">
                                            <div className="form-items">
                                                <span className="labeltitle">{htmlLabels.inputUsername}</span>
                                                <input type="text" placeholder={htmlLabels.inputUsername} />
                                            </div>

                                            <div className="form-items">
                                                <span className="labeltitle">{htmlLabels.inputEmail}</span>
                                                <input type="text" placeholder={htmlLabels.inputEmail} />
                                            </div>

                                            <div className="form-items">
                                                <span className="labeltitle">{htmlLabels.inputPassword}</span>
                                                <input type="password" placeholder={htmlLabels.inputPassword} />
                                            </div>

                                            <div className="form-items">
                                                <span className="labeltitle">{htmlLabels.inputReapPwd}</span>
                                                <input type="password" placeholder={htmlLabels.inputReapPwd} />
                                            </div>

                                            <div className="btnLogin">
                                                <Link to='/'>
                                                    {htmlLabels.btnSignup}
                                                </Link>
                                            </div>
                                        </div>
                                        <Link to='/' >
                                                {htmlLabels.btnTologin}
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

export default SignUpPage;