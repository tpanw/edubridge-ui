import React from "react";
import Vision from "./Vision";

export default class About extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="container-fluid padding" id="about">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <h1 className="display-4">Welcome to Edubridge IAS</h1>
                        </div>
                        <hr />
                        <div className="col-12">
                            <p className="lead">
                            Edubridge IAS is a free of cost guidance platform for UPSC aspirants. The team includes serving civil servants i.e. IAS, IPS, IRS Officers and renowned faculties.
                            </p>
                        </div>
                    </div>
                </div>
                <Vision />
            </div>
        )
    }
}