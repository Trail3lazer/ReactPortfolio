import React from "react";
import './index.css'

const Portal = () => {
    return (
        <div className="portalContainer container-fluid p-0">
            <div className="portal-relative-container position-relative">

                <img className="portal blue position-absolute" src='https://d1p0m2aj917ekc.cloudfront.net/portal/bluePortal.gif' alt="blue portal" />
                <img className="portal orange position-absolute" src='https://d1p0m2aj917ekc.cloudfront.net/portal/orangePortal.gif' alt="orange portal" />
                

                    <div className="stick-container position-absolute">
                      
                            <img className="portal stickMan position-relative" src='https://d1p0m2aj917ekc.cloudfront.net/portal/stickMan.png' alt="stick man" />
                        
                    </div>

            </div>
        </div>
    )
}

export default Portal;