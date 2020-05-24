import React from "react";
import teacher from "../teacher.jpg"

export default class Team extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container-fluid padding" id="team">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <h1 className="display-4">Meet the team</h1>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="container-fluid padding">
                    <div className="row padding">
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src={teacher} alt="teacher"/>
                                <div className="card-body">
                                    <div className="card-title">Nitish Sharma</div>
                                    <p className="card-text">Nitish is a faculty at Chanakya IAS Coaching center.</p>
                                    <a href="#" className="btn btn-outline-secondary">See Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src={teacher} alt="teacher" />
                                <div className="card-body">
                                    <div className="card-title">Nitish Sharma</div>
                                    <p className="card-text">Nitish is a faculty at Chanakya IAS Coaching center.</p>
                                    <a href="#" className="btn btn-outline-secondary">See Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src={teacher} alt="teacher"/>
                                <div className="card-body">
                                    <div className="card-title">Nitish Sharma</div>
                                    <p className="card-text">Nitish is a faculty at Chanakya IAS Coaching center.</p>
                                    <a href="#" className="btn btn-outline-secondary">See Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}