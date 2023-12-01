import {  NavLink} from "react-router-dom";
import React from "react";
// import axios from "axios";


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
                    <NavLink to="/develop/webdevelopment" className="nav">web Development</NavLink>
                    </span>
                <span>
                    <NavLink to="/develop/datascience" className="nav">Data Science</NavLink>
                </span>
                
                <span>
                    <NavLink to="/develop/mobiledevelopment" className="nav">Mobile Development</NavLink> 
                </span>
                <span>Programming Languages</span>
                <span>Game Development</span>
               
            </div>
    
       </>
        )
}    
export default DevelopmentRoute    