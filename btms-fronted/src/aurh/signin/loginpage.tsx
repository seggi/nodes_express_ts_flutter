import React, { Component, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";




import "../../style/auth_style.css";
import { htmlLabels } from "../datas";
import AuthHeader from "../../services/auth.header"
import { login } from "../protected";


const required =value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required
            </div>
        );
    }
}


function LoginPage (props) {
    const form = useRef<any>() ;
    const checkBtn = useRef<any>();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();
        
        if (checkBtn.current.context._errors.length === 0) {
            
            AuthHeader.login(username, password)
            .then((resp) => {
                if(resp.token) {
                    login(resp.token)
                    props.history.push("/main_page/dashboard");
                    // window.location.reload();
                }
                else {
                    setMessage(resp.error)
                }
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
    };


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
                                <Form onSubmit={handleLogin} ref={form}>
                                    <div className="item-box">
                                        <div className="item-box__title">
                                            <h4>{ htmlLabels.formTitle }</h4>
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
                                                <span className="labeltitle">{htmlLabels.inputPassword}</span>
                                                <Input 
                                                    type="password" 
                                                    value={password}
                                                    name="password"
                                                    placeholder={htmlLabels.inputPassword}
                                                    onChange={onChangePassword}
                                                    validations={[required]}
                                                        />
                                            </div>

                                            <CheckButton style={{ display: "none" }} ref={checkBtn} />

                                            <div className="btnLogin">
                                                {/* <Link to='/main_page/dashboard'>
                                                    {htmlLabels.btnlogin}
                                                </Link> */}
                                                <button disabled={loading}>
                                                    {
                                                        loading && (
                                                            <span className="spinner-border spinner-border-sm"></span>
                                                        )
                                                    }
                                                    <span>Login</span>
                                                </button>
                                            </div>
                                            {message && (
                                                <div className="form-group">
                                                <div className="alert alert-danger" role="alert">
                                                    {message}
                                                </div>
                                                </div>
                                            )}
                                        </div>

                                        <Link to='/signup' >
                                                {htmlLabels.btnToSignup}
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

export default LoginPage;