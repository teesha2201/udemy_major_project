import {  NavLink} from "react-router-dom";
import React from "react";
// import axios from "axios";
import "./Webdevelop.css"

import "./Development.css"
const DevelopmentRoute= ()=>{

    
        return(
       <> 
            <div className="developmentNav">
                <span className="developroute">
                    <NavLink to="/development">
                    Development
                    </NavLink> <i class="fa-solid fa-chevron-right"></i></span>
                <span>
                    <NavLink to="/develop/webdevelopment">web Development</NavLink>
                    </span>
                <span>Data Science</span>
                <span>Mobile Development</span>
                <span>Programming Languages</span>
                <span>Game Development</span>
               
            </div>
    
       </>
        )
}    
export default DevelopmentRoute    