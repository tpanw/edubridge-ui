import React from "react";

import group from "../group.svg";
import individual from "../individual.svg";

export default class Vision extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid padding">
                <div className="row text-center padding vision">
                    <div className="col-12">
                        <h3>Vision and Mission</h3><hr />
                    </div>
                    <div className="col-md-6" style={{marginTop:1+"em"}}>
                        <div className="card">
                            <img src={individual} alt="individual"/>                        
                            <h4>For Individual</h4>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                            </p>
                        </div>   
                    </div>
                    <div className="col-md-6" style={{marginTop:1+"em"}}>
                        <div className="card">
                            <img src={group} alt="group"/>                        
                            <h4>For Society</h4>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}