import React from "react";
 import "./Footer.css"
const Footer = () =>{
    return(
        <>
            <footer>
                
            

                <div className="footerParent">
                    <div className="rowone">
                        <div className="row1_left">
                            Top companies choose Udemy Business to build in-demand career skills.
                        </div>
                        <div className="row1_right">
                            <span>
                                <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="not found"/>
                            </span>
                            <span>
                                <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="not found"/>
                            </span>
                            <span>
                                <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="not found"/>
                            </span>
                            <span>
                                <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="not found"/>
                            </span>
                            <span>
                                <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="not found"/>
                            </span>
                        </div>
                    </div>
                    <div className="footer_div">
                        <div className="div1">
                            <ul>
                                <li>Udemy Business</li>
                                <li>Tech on Udemy</li>
                                <li>Get the app</li>
                                <li>About us</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div className="div2">
                            <ul>
                                <li>Careers</li>
                                <li>Blog</li>
                                <li>Help and Support</li>
                                <li>Afflitate</li>
                                <li>Investors</li>
                            </ul>
                        </div>
                        <div className="div3">
                            <ul>
                                <li>Terms </li>
                                <li>Privacy Policy</li>
                                <li>Cookie Settings</li>
                                <li>SiteMap</li>
                                <li>Accessibility statement</li>
                            </ul>
                        </div>
                        
                        
                    </div>
                <div className="divright">
                    
                </div>
                <div className="row3">
                    <div className="row3_left">
                        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" className="logo" alt="not found"/>
                    </div>
                        
                    
                    <div className="row3_right">
                        © 2023 Udemy, Inc.
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;