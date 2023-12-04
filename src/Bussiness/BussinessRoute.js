import {  NavLink} from "react-router-dom";
import React from "react";
import "../development/Development";

const BussinessRoute= ()=>{

    
        return(
        <> 
            <div className="developmentNav">
                <span className="developroute">
                    <NavLink to="/bussiness">
                    Bussiness
                    </NavLink> <i class="fa-solid fa-chevron-right"></i></span>
                <span>
                    <NavLink to="/bussiness/communication" className="nav">Communication</NavLink>
                </span>
                <span>
                    <NavLink to="/bussiness/management" className="nav">Management</NavLink> 
                </span>               
                <span>
                    <NavLink to="/bussiness/bussiness_strategy" className="nav">Bussiness Strategy</NavLink>
                </span>
                <span>
                    <NavLink to="/bussiness/operation" className="nav">Operations</NavLink>
                </span>
                <span>
                    <NavLink to="/bussiness/human_resources" className="nav">Human Resources</NavLink>
                </span>               
            </div>
    
       </>
        )
}    
export default BussinessRoute    