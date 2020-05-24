import React from 'react';
import Menu from "./Menu";
import logo from "../logo.svg";
import '../App.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} className="app-logo" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Menu />
            </div>
        </nav>
    );
}

export default Header;