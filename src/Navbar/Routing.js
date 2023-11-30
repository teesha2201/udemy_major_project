import React from "react";
import { Route,Routes} from "react-router-dom";
import Udemy from "../Components/Udemy";
import TechOnUdemy from "../Components/TechOnUdemy";
import WebDevelop from "../development/WebDevelop";

const Routing = ()=>{
    return(
        <>
           <Routes>
                <Route path="/techonudemy" element={<TechOnUdemy/>}/>
                <Route path="/udemy" element={<Udemy/>}/>
               
                <Route path="/webdevelopment" element={<WebDevelop/>}/>


               
           </Routes>
        </>
    )
}
export default Routing