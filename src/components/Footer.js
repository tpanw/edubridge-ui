import React from "react";
import logo from "../logo.svg";

const Footer = () => (
    <footer>
                <div className="container-fluid padding">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <img src={logo} className="app-logo-bottom" alt="logo"/>
                            <hr className="light" />
                            <p>+91-97177 55534</p>
                            <p>edubridge.ias@gmail.com</p>
                        </div>
                        <div className="col-md-4">
                            <hr className="light" />
                            <h5>Our hours</h5>
                            <hr className="light" />
                            <p>Monday: 9:00 AM - 5:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: closed</p>
                        </div>
                        <div className="col-md-4">
                            <hr className="light" />
                            <h5>Service Areas</h5>
                            <hr className="light" />
                            <p>City, State, 000000</p>
                            <p>City, State, 000000</p>
                            <p>City, State, 000000</p>
                            <p>City, State, 000000</p>
                        </div>
                        <div className="col-12">
                            <hr className="light-100" />
                            <h5>&copy; edubridge.ias.com</h5>
                        </div>
                    </div>
                </div>
            </footer>
)

export default Footer;