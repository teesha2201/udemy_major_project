import {  NavLink} from "react-router-dom";
import React from "react";
import "../development/Development";

const MusicRoute = ()=>{

    
        return(
        <> 
            <div className="developmentNav">
                <span className="developroute">
                <NavLink to="/music">
                        Music
                    </NavLink>  <i class="fa-solid fa-chevron-right"></i></span>
                <span>
                <NavLink to="/music/instruments" className="nav">Instruments</NavLink>
                </span>
                <span>
                <NavLink to="/music/musicproduction" className="nav">Music Production</NavLink> 
                </span>               
                <span>
                <NavLink to="/music/musicsoftware" className="nav">Music Software</NavLink>
                </span>
                <span>
                <NavLink to="/music/vocal" className="nav">Vocal</NavLink>
                </span>
                <span>
                <NavLink to="/music/musictechniques" className="nav">Music Techniques</NavLink>
                </span>               
            </div>
    
       </>
        )
}    
export default MusicRoute    