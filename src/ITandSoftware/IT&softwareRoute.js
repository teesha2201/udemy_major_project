import {  NavLink} from "react-router-dom";
import React from "react";
import "../development/Development";

const ITandsoftwareRoute = ()=>{

    
        return(
        <> 
            <div className="developmentNav">
                <span className="developroute">
                    <NavLink to="/It&sofware">
                    IT & Software
                    </NavLink> <i class="fa-solid fa-chevron-right"></i></span>
                <span>
                    <NavLink to="/It&sofware/ITcertification" className="nav">It Certification</NavLink>
                </span>
                <span>
                    <NavLink to="/It&sofware/network&security" className="nav"> Network & Security</NavLink> 
                </span>               
                <span>
                    <NavLink to="/It&sofware/hardware" className="nav">Hardware</NavLink>
                </span>
                <span>
                    <NavLink to="/It&sofware/operatingsystem&server" className="nav">Operating System & Server</NavLink>
                </span>
                <span>
                    <NavLink to="/It&sofware/otherIt&software" className="nav">Other It & Software</NavLink>
                </span>               
            </div>
    
       </>
        )
}    
export default ITandsoftwareRoute    