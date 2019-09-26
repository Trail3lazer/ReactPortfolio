import React from "react";
import './index.css'

const Portal = () => {
    return (
        <div className="portalContainer container-fluid">
            <img className="portal blue position-absolute" src='https://d1p0m2aj917ekc.cloudfront.net/portal/bluePortal.gif' alt="blue portal"/>
            <img className="portal stickMan position-absolute" src='https://d1p0m2aj917ekc.cloudfront.net/portal/stickMan.png' alt="stick man"/>
            <img className="portal orange position-absolute" src='https://d1p0m2aj917ekc.cloudfront.net/portal/orangePortal.gif' alt="orange portal"/>
        </div>
    )
}

export default Portal;