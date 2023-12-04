import {  NavLink} from "react-router-dom";
import React from "react";
import "../development/Webdevelop.css"

const FinanceRoute= ()=>{

    
        return(
       <> 
            <div className="developmentNav">
                <span className="developroute">
                    <NavLink to="/finance&accounting">
                        Finance & Accounting
                    </NavLink> <i class="fa-solid fa-chevron-right"></i>
                </span>
                <span>
                    <NavLink to="/finance&acc/accounting&bookkeeping" className="nav">Accounting & Book Keeping</NavLink>
                </span>
                <span>
                    <NavLink to="/finance&acc/compilance" className="nav">Compilance</NavLink> 
                </span>               
                <span>
                    <NavLink to="/finance&acc/economic" className="nav">Economic</NavLink>
                </span>
                <span>
                    <NavLink to="/finance&acc/finance" className="nav">Finance</NavLink>
                </span>
                <span>
                    <NavLink to="/finance&acc/taxes" className="nav">Taxes</NavLink>
                </span>
                
               
            </div>
    
       </>
        )
}    
export default FinanceRoute    