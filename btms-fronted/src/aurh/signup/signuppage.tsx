import React, { Component, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";



import { htmlLabels } from "../datas";
import AuthHeader from "../../services/auth.header"



const required =value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required
            </div>
        );
    }
}


function SignUpPage (props) {
    const form  = useRef<any>();
    const checkBtn = useRef<any>();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reppeatPassword, setReppeatPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(""); 

    const [successful, setSuccessful] = useState(false);

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    }

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const onChangeReppeatPassword = (e) => {
        const reppeatPassword = e.target.value;
        setReppeatPassword(reppeatPassword);
    }


    const handleSignUp = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthHeader.register(username, email, password, reppeatPassword)
            .then((response) => {
                setMessage(response.data.message);
                setSuccessful(true);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                
                setLoading(false);
                setMessage(resMessage);
            });
        }
        else {
            setLoading(false);
        }
    }

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
                                <Form onSubmit={handleSignUp} ref={form}>
                                    <div className="item-box">
                                        <div className="item-box__title">
                                            <h4>{ htmlLabels.formTitleOne }</h4>
                                        </div>
                                        <div className="form-item__box">
                                            <div className="form-items">
                                                <span className="labeltitle">{htmlLabels.inputUsername}</span>
                                                <Input
                                                    type="text" 
                                                    value={username}
                                                    name="username"
                                                    placeholder={htmlLabels.inputUsername} 
                                                    onChange={onChangeUsername}
                                                    validations={[required]}
                                                    />
                                            </div>

                                            <div className="form-items">
                                                <span className="labeltitle">{htmlLabels.inputEmail}</span>
                                                <Input
                                                    type="text" 
                                                    placeholder={htmlLabels.inputEmail}
                                                    name="username"
                                                    onChange={onChangeEmail}
                                                    validations={[required]}
                                                    />
                                            </div>

                                            <div className="form-items">
                                                <span className="labeltitle">{htmlLabels.inputPassword}</span>
                                                <Input 
                                                    type="password" 
                                                    placeholder={htmlLabels.inputPassword} 
                                                    name="password"
                                                    onChange={onChangePassword}
                                                    validations={[required]}
                                                    />
                                            </div>

                                            <div className="form-items">
                                                <span className="labeltitle">{htmlLabels.inputReapPwd}</span>
                                                <Input 
                                                    type="password" 
                                                    placeholder={htmlLabels.inputReapPwd} 
                                                    name="reppeatpassword"
                                                    onChange={onChangeReppeatPassword}
                                                    validations={[required]}
                                                    />
                                            </div>

                                            <div className="btnLogin">
                                                {/* <Link to='/'>
                                                    {htmlLabels.btnSignup}
                                                </Link> */}
                                                <div className="form-group">
                                                    <button className="btn btn-primary btn-block">Sign Up</button>
                                                </div>
                                            </div>
                                            {message && (
                                                <div className="form-group">
                                                <div
                                                    className={ successful ? "alert alert-success" : "alert alert-danger" }
                                                    role="alert"
                                                >
                                                    {message}
                                                </div>
                                                </div>
                                            )}
                                        <CheckButton style={{ display: "none" }} ref={checkBtn} />
                                        </div>
                                        <Link to='/' >
                                                {htmlLabels.btnTologin}
                                        </Link>
                                    </div>
                                </Form>
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

export default SignUpPage;