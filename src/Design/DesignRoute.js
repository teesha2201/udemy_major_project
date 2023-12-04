import {  NavLink} from "react-router-dom";
import React from "react";
import "../development/Development";

const DesignRoute= ()=>{

    
        return(
        <> 
            <div className="developmentNav">
                <span className="developroute">
                    <NavLink to="/design">
                    Design
                    </NavLink> <i class="fa-solid fa-chevron-right"></i></span>
                <span>
                    <NavLink to="/design/webdesign" className="nav">Web Design</NavLink>
                </span>
                <span>
                    <NavLink to="/design/fashiondesign" className="nav">Fashion Design</NavLink> 
                </span>               
                <span>
                    <NavLink to="/design/3d&animation" className="nav">3D & Animation</NavLink>
                </span>
                <span>
                    <NavLink to="/design/gamedesign" className="nav">Game Design</NavLink>
                </span>
                <span>
                    <NavLink to="/design/otherdesign" className="nav">Other Design</NavLink>
                </span>               
            </div>
    
       </>
        )
}    
export default DesignRoute    