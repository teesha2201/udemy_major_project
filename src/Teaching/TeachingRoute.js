import {  NavLink} from "react-router-dom";
import React from "react";
import "../development/Development";

const TeachingRoute = ()=>{

    
        return(
        <> 
            <div className="developmentNav">
                <span className="developroute">
                <NavLink to="/teaching">
                Teaching & Academics
                    </NavLink>  <i class="fa-solid fa-chevron-right"></i></span>
                <span>
                <NavLink to="/teaching/engineering" className="nav">Engneering </NavLink>
                </span>
                <span>
                <NavLink to="/teaching/socialscience" className="nav">Social Science</NavLink> 
                </span>               
                <span>
                <NavLink to="/teaching/math" className="nav">  Math </NavLink>
                </span>
                <span>
                <NavLink to="/teaching/science" className="nav">Science</NavLink>
                </span>
                <span>
                <NavLink to="/teaching/teachertraining" className="nav">Teacher Training</NavLink>
                </span>               
            </div>
    
       </>
        )
}    
export default TeachingRoute    