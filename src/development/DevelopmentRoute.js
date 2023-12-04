import {  NavLink} from "react-router-dom";
import React from "react";
import "./Development.css";

const DevelopmentRoute= ()=>{

    
        return(
       <> 
            <div className="developmentNav">
                <span className="developroute">
                    <NavLink to="/development">
                    Development
                    </NavLink> <i class="fa-solid fa-chevron-right"></i></span>
                <span>
                    <NavLink to="/develop/webdevelopment" className="nav">web Design</NavLink>
                    </span>
                    <span>Game Design</span>
                
                <span>
                {/* Mobile Development */}
                    <NavLink to="/develop/mobiledevelopment" className="nav">3D & Animation</NavLink> 
                </span>
                <span>
                    Fashion Design
                </span>
                <span>
                    <NavLink to="/develop/datascience" className="nav">Data Science</NavLink>
                </span>
                
               
            </div>
    
       </>
        )
}    
export default DevelopmentRoute    