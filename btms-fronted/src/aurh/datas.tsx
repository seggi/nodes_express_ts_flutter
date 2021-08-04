import React from "react";

import homeImage from "../assets/images/board_traders.jpg";

const webtitle = () => {
    return <>
        B<b>T</b>MS
    </>
}

export const htmlLabels: { [key: string]: any}= {
    siteTitle: webtitle(),
    formTitle: "Sign In",
    inputUsername: "Username",
    inputPassword: "Password",
    btnlogin: "Login",
    btnToSignup: "Don't have an account? register now",
    btnTologin: "Have an account? sign in now",
    rightSideImage:  homeImage,
    inputEmail: "Email",
    inputReapPwd: "Reppeat Password",
    btnSignup: "Sign Up",
    formTitleOne: "Register"
}
