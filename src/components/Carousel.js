import React from "react";

import background from "../background.jpg"

function Carousel(){
    return(
        <div id="home" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={background} alt="teach"/>
                    <div className="carousel-caption">
                        <h1 className="display-2">EDUBRIDGE</h1>
                        <h3>Learn. Grow. Achieve</h3>
                        <button type="button" className="btn btn-primary btn-lg">Learn More</button>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Carousel;