import {  NavLink} from "react-router-dom";
import React from "react";
import "../development/Development";

const LifestyleRoute= ()=>{

    
        return(
        <> 
            
            <div className="developmentNav">
                <span className="developroute">
                    <NavLink to="/lifestyle">
                    LifeStyle
                    </NavLink> <i class="fa-solid fa-chevron-right"></i></span>
                <span>
                    <NavLink to="/lifestyle/arts&crafts" className="nav">Arts & Crafts</NavLink>
                </span>
                <span>
                    <NavLink to="/lifestyle/beauty&makeup" className="nav">Beauty & Makeup</NavLink> 
                </span>               
                <span>
                    <NavLink to="/lifestyle/travel" className="nav">Travel</NavLink>
                </span>
                <span>
                    <NavLink to="/lifestyle/food&beverage" className="nav"> Food & Beverage</NavLink>
                </span>
                <span>
                    <NavLink to="/lifestyle/petcare&training" className="nav">Pet care & Training</NavLink>
                </span>               
            </div>
    
       </>
        )
}    
export default LifestyleRoute   