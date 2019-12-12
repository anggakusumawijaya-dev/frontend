import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../styles/styles.css";

class Login extends Component {
    render() {
        return (
            <div className="login-wrapper">
                <div className="login-layout">
                    <h2>Welcome to <b style={{fontSize: "64px", color: "#ECC968"}}>studiokoding</b></h2>
                    <div className="login-card-wrapper">
                        <div className="login-card">
                            <div className="login-card-content">
                                <h3>Login</h3>
                                <div className="login-email-form">
                                    <form action="">
                                        <label for="username">Username / Email</label>
                                        <input id="username" type="text" placeholder="Username Anda" />
                                        
                                        <label for="password">Password</label>
                                        <input id="password" type="password" placeholder="Password Anda" />
                                        
                                    </form>
                                </div>
                                <div className="socmed-login">
                                    <ul>
                                        <li>
                                            <img src={require("../images/facebook-logo.png")} alt="" /><Link to="/"></Link>
                                        </li>
                                        <li>
                                            <img src={require("../images/twitter-logo.png")} alt="" /><Link to="/"></Link>
                                        </li>
                                        <li>
                                            <img src={require("../images/instagram-logo.png")} alt="" /><Link to="/"></Link>
                                        </li>
                                        <li>
                                            <img src={require("../images/phone-logo.png")} alt="" /><Link to="/"></Link>
                                        </li>
                                    </ul>
                                </div>
                                <button><Link to="/">Login</Link></button>
                                <p className="login-text">Belum punya akun? <span><Link to="/register">Daftar di sini</Link></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="login-house">
                        <div className="login-house-content">
                            <img src={require("../images/slide2.jpg")} alt="" />
                            <h3>Web Consultant & Training</h3>
                            <p>Kursus Web, Digital Marketing & Toko Online Terbaik di Jakarta, Serpong dan Bekasi</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
