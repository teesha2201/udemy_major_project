import {  NavLink} from "react-router-dom";
import React from "react";
import "../development/Development";

const MarketRoute= ()=>{

    
        return(
        <> 
            <div className="developmentNav">
                <span className="developroute">
                    <NavLink to="/marketing">
                    Marketing
                    </NavLink> <i class="fa-solid fa-chevron-right"></i></span>
                <span>
                    <NavLink to="/marketing/digitalmarketing" className="nav">Digital Marketing</NavLink>
                </span>
                <span>
                    <NavLink to="/marketing/contentmarketing" className="nav">Content Marketing</NavLink> 
                </span>               
                <span>
                    <NavLink to="/marketing/socialmediamarketing" className="nav">Social Media Marketing</NavLink>
                </span>
                <span>
                    <NavLink to="/marketing/productmarketing" className="nav">Product Marketing</NavLink>
                </span>
                <span>
                    <NavLink to="/marketing/publicmarketing" className="nav">Public Marketing</NavLink>
                </span>               
            </div>
    
       </>
        )
}    
export default MarketRoute    