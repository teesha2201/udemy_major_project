import {  NavLink} from "react-router-dom";
import React from "react";
import "../development/Development";

const PhotographyRoute = ()=>{

    
        return(
        <> 
            
            <div className="developmentNav">
                <span className="developroute">
                    <NavLink to="/photography">
                    Photography & Video
                    </NavLink> <i class="fa-solid fa-chevron-right"></i></span>
                <span>
                    <NavLink to="/photography/digitalphotography" className="nav">Digital Photography</NavLink>
                </span>
                <span>
                    <NavLink to="/photography/photo" className="nav">Photography</NavLink> 
                </span>               
                <span>
                    <NavLink to="/photography/commericialphotography" className="nav">Commercial Photography</NavLink>
                </span>
                <span>
                    <NavLink to="/photography/photographytools" className="nav">Photography Tools</NavLink>
                </span>
                <span>
                    <NavLink to="/photography/videodesign" className="nav">Video Design</NavLink>
                </span>               
            </div>
    
       </>
        )
}    
export default PhotographyRoute   