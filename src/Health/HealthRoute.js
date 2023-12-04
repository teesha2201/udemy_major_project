import {  NavLink} from "react-router-dom";
import React from "react";
import "../development/Development";

const HealthRoute = ()=>{

    
        return(
        <> 
            <div className="developmentNav">
                <span className="developroute">
                    <NavLink to="/health&fitness">
                        Health & Fitness
                    </NavLink> <i class="fa-solid fa-chevron-right"></i></span>
                <span>
                    <NavLink to="/health&fitness/fitness" className="nav">Fitness</NavLink>
                </span>
                <span>
                    <NavLink to="/health&fitness/mentalhealth" className="nav">Mental Health</NavLink> 
                </span>               
                <span>
                    <NavLink to="/health&fitness/sports" className="nav">Sports</NavLink>
                </span>
                <span>
                    <NavLink to="/health&fitness/yoga" className="nav">Yoga</NavLink>
                </span>
                <span>
                    <NavLink to="/health&fitness/dance" className="nav">Dance</NavLink>
                </span>               
            </div>
    
       </>
        )
}    
export default HealthRoute    