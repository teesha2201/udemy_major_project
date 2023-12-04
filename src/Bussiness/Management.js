import React,{useState,useEffect} from "react";
import axios from "axios";
import "../development/Webdevelop.css"
import BussinessRoute from "./BussinessRoute";

const Management = ()=>{
    const [bussiness,setBussiness] = useState([])
 
    useEffect(()=>{
     
          axios.get('http://localhost:4005/udemy/getdatafromstore')
              .then((res)=>{setBussiness(res.data);
                console.log(res.data)    
            })
              .catch((err)=>console.log(err))
        
        },[])
    
    return(
       <>   
           < BussinessRoute />
          
            <div className="web_parent">
                <div className="web_div">
                    <h1 className="web_headingfirst">Management Courses</h1>
                    <h3>Courses to get you started</h3>
                    <div className="web_mostpopular">
                        <span className="mostpopular">Most popular</span>
                        {/* <span>New</span> */}
                        <span>Trending</span>
                    </div>
                </div>
                <div className="web_cardrow1">
                                    <div className="web_cardParent1">
                                        
                                        {bussiness.filter((item,index)=>(item.id===102)).map((item,index)=>{
                                        return(
                                            <div key={index} className="web_cardContainer2">
                                            
                                                <div className="web_singleCard1">
                                                        <div className="web_card1">
                                                            <img src={item.img} alt="not found"/> 
                                                        </div>
                                                        <div className="web_carddetails">
                                                            <p className="web_cardheading">
                                                                {item.heading}
                                                            </p>
                                                            <p className="web_cardname">
                                                                {item.name}
                                                            </p>
                                                            <p className="web_cardrating">
                                                                {item.rating}⭐⭐⭐⭐⭐
                                                                <span className="web_cardviewer">
                                                                    ({item.viewer})
                                                                </span>
                                                            </p>
                                                            <p className="web_cardprice">
                                                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                                                {item.price} &nbsp;&nbsp; 
                                                                <span className="web_cardpreviousPrice">
                                                                
                                                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                                                {item.previous_price}
                                                                </span>
                                                            </p>
                                                        </div>

                                                        <div className="web_cardhover web_cardhover1">
                                                        <div className="web_heading">{item.heading}</div>
                                                        <div className="web_updated">
                                                            <span className="web_bestseller">BestSeller</span>
                                                            <span className="web_updatedtext">updated </span>
                                                            <span className="web_updatedate">{item.updated_date}</span>
                                                        </div>
                                                        
                                                        <div className="web_totalhrs">
                                                            <span>{item.total_hrs}total hours</span>
                                                            <span> . All Levels</span>
                                                            <span> . Subtitles</span>
                                                        </div> 
                                                        
                                                        <div className="web_aboutparent">
                                                            <div className="web_about">{item.para}</div>
                                                        </div>
                                                    
                                                        <div className="web_points">
                                                            <div className="web_pointOne">
                                                                <span><i class="fa-solid fa-check"></i></span>
                                                                <span>   {item.key_1}</span>
                                                            </div>
                                                            <div className="web_pointtwo">
                                                                <span><i class="fa-solid fa-check"></i></span>
                                                                <span>   {item.key_2}</span>
                                                            </div>
                                                            <div className="web_pointthree">
                                                                <span><i class="fa-solid fa-check"></i></span>
                                                                <span>   {item.key_3}</span>
                                                            </div>
                                                        </div> 

                                                        <div className="web_hoveraddtocart">
                                                            <button className="web_addtocartbutton">
                                                                Add to cart
                                                            </button>
                                                            <div className="web_wishlist">
                                                                <i class="fa-regular fa-heart"></i>
                                                            </div>
                                                        </div>
                                                        </div>
                                                </div>
                                            </div>    
                                            )
                                        })}
                                    </div> 
                                    <div className="web_cardParent1">
                                        
                                        {bussiness.filter((item,index)=>(item.id===103)).map((item,index)=>{
                                        return(
                                            <div key={index} className="web_cardContainer2">
                                            
                                                <div className="web_singleCard1">
                                                        <div className="web_card1">
                                                            <img src={item.img} alt="not found"/> 
                                                        </div>
                                                        <div className="web_carddetails">
                                                            <p className="web_cardheading">
                                                                {item.heading}
                                                            </p>
                                                            <p className="web_cardname">
                                                                {item.name}
                                                            </p>
                                                            <p className="web_cardrating">
                                                                {item.rating}⭐⭐⭐⭐⭐
                                                                <span className="web_cardviewer">
                                                                    ({item.viewer})
                                                                </span>
                                                            </p>
                                                            <p className="web_cardprice">
                                                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                                                {item.price} &nbsp;&nbsp; 
                                                                <span className="web_cardpreviousPrice">
                                                                
                                                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                                                {item.previous_price}
                                                                </span>
                                                            </p>
                                                        </div>

                                                        <div className="web_cardhover web_cardhover1">
                                                        <div className="web_heading">{item.heading}</div>
                                                        <div className="web_updated">
                                                            <span className="web_bestseller">BestSeller</span>
                                                            <span className="web_updatedtext">updated </span>
                                                            <span className="web_updatedate">{item.updated_date}</span>
                                                        </div>
                                                        
                                                        <div className="web_totalhrs">
                                                            <span>{item.total_hrs}total hours</span>
                                                            <span> . All Levels</span>
                                                            <span> . Subtitles</span>
                                                        </div> 
                                                        
                                                        <div className="web_aboutparent">
                                                            <div className="web_about">{item.para}</div>
                                                        </div>
                                                    
                                                        <div className="web_points">
                                                            <div className="web_pointOne">
                                                                <span><i class="fa-solid fa-check"></i></span>
                                                                <span>   {item.key_1}</span>
                                                            </div>
                                                            <div className="web_pointtwo">
                                                                <span><i class="fa-solid fa-check"></i></span>
                                                                <span>   {item.key_2}</span>
                                                            </div>
                                                            <div className="web_pointthree">
                                                                <span><i class="fa-solid fa-check"></i></span>
                                                                <span>   {item.key_3}</span>
                                                            </div>
                                                        </div> 

                                                        <div className="web_hoveraddtocart">
                                                            <button className="web_addtocartbutton">
                                                                Add to cart
                                                            </button>
                                                            <div className="web_wishlist">
                                                                <i class="fa-regular fa-heart"></i>
                                                            </div>
                                                        </div>
                                                        </div>
                                                </div>
                                            </div>    
                                            )
                                        })}
                                    </div> 
                                    <div className="web_cardParent1">
                                        
                                        {bussiness.filter((item,index)=>(item.id===104)).map((item,index)=>{
                                        return(
                                            <div key={index} className="web_cardContainer2">
                                            
                                                <div className="web_singleCard1">
                                                        <div className="web_card1">
                                                            <img src={item.img} alt="not found"/> 
                                                        </div>
                                                        <div className="web_carddetails">
                                                            <p className="web_cardheading">
                                                                {item.heading}
                                                            </p>
                                                            <p className="web_cardname">
                                                                {item.name}
                                                            </p>
                                                            <p className="web_cardrating">
                                                                {item.rating}⭐⭐⭐⭐⭐
                                                                <span className="web_cardviewer">
                                                                    ({item.viewer})
                                                                </span>
                                                            </p>
                                                            <p className="web_cardprice">
                                                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                                                {item.price} &nbsp;&nbsp; 
                                                                <span className="web_cardpreviousPrice">
                                                                
                                                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                                                {item.previous_price}
                                                                </span>
                                                            </p>
                                                        </div>

                                                        <div className="web_cardhover web_cardhover1">
                                                        <div className="web_heading">{item.heading}</div>
                                                        <div className="web_updated">
                                                            <span className="web_bestseller">BestSeller</span>
                                                            <span className="web_updatedtext">updated </span>
                                                            <span className="web_updatedate">{item.updated_date}</span>
                                                        </div>
                                                        
                                                        <div className="web_totalhrs">
                                                            <span>{item.total_hrs}total hours</span>
                                                            <span> . All Levels</span>
                                                            <span> . Subtitles</span>
                                                        </div> 
                                                        
                                                        <div className="web_aboutparent">
                                                            <div className="web_about">{item.para}</div>
                                                        </div>
                                                    
                                                        <div className="web_points">
                                                            <div className="web_pointOne">
                                                                <span><i class="fa-solid fa-check"></i></span>
                                                                <span>   {item.key_1}</span>
                                                            </div>
                                                            <div className="web_pointtwo">
                                                                <span><i class="fa-solid fa-check"></i></span>
                                                                <span>   {item.key_2}</span>
                                                            </div>
                                                            <div className="web_pointthree">
                                                                <span><i class="fa-solid fa-check"></i></span>
                                                                <span>   {item.key_3}</span>
                                                            </div>
                                                        </div> 

                                                        <div className="web_hoveraddtocart">
                                                            <button className="web_addtocartbutton">
                                                                Add to cart
                                                            </button>
                                                            <div className="web_wishlist">
                                                                <i class="fa-regular fa-heart"></i>
                                                            </div>
                                                        </div>
                                                        </div>
                                                </div>
                                            </div>    
                                            )
                                        })}
                                    </div> 
                                    <div className="web_cardParent1">
                                        
                                        {bussiness.filter((item,index)=>(item.id===105)).map((item,index)=>{
                                        return(
                                            <div key={index} className="web_cardContainer2">
                                            
                                                <div className="web_singleCard1">
                                                        <div className="web_card1">
                                                            <img src={item.img} alt="not found"/> 
                                                        </div>
                                                        <div className="web_carddetails">
                                                            <p className="web_cardheading">
                                                                {item.heading}
                                                            </p>
                                                            <p className="web_cardname">
                                                                {item.name}
                                                            </p>
                                                            <p className="web_cardrating">
                                                                {item.rating}⭐⭐⭐⭐⭐
                                                                <span className="web_cardviewer">
                                                                    ({item.viewer})
                                                                </span>
                                                            </p>
                                                            <p className="web_cardprice">
                                                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                                                {item.price} &nbsp;&nbsp; 
                                                                <span className="web_cardpreviousPrice">
                                                                
                                                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                                                {item.previous_price}
                                                                </span>
                                                            </p>
                                                        </div>

                                                        <div className="web_cardhover web_cardhover4">
                                                        <div className="web_heading">{item.heading}</div>
                                                        <div className="web_updated">
                                                            <span className="web_bestseller">BestSeller</span>
                                                            <span className="web_updatedtext">updated </span>
                                                            <span className="web_updatedate">{item.updated_date}</span>
                                                        </div>
                                                        
                                                        <div className="web_totalhrs">
                                                            <span>{item.total_hrs}total hours</span>
                                                            <span> . All Levels</span>
                                                            <span> . Subtitles</span>
                                                        </div> 
                                                        
                                                        <div className="web_aboutparent">
                                                            <div className="web_about">{item.para}</div>
                                                        </div>
                                                    
                                                        <div className="web_points">
                                                            <div className="web_pointOne">
                                                                <span><i class="fa-solid fa-check"></i></span>
                                                                <span>   {item.key_1}</span>
                                                            </div>
                                                            <div className="web_pointtwo">
                                                                <span><i class="fa-solid fa-check"></i></span>
                                                                <span>   {item.key_2}</span>
                                                            </div>
                                                            <div className="web_pointthree">
                                                                <span><i class="fa-solid fa-check"></i></span>
                                                                <span>   {item.key_3}</span>
                                                            </div>
                                                        </div> 

                                                        <div className="web_hoveraddtocart">
                                                            <button className="web_addtocartbutton">
                                                                Add to cart
                                                            </button>
                                                            <div className="web_wishlist">
                                                                <i class="fa-regular fa-heart"></i>
                                                            </div>
                                                        </div>
                                                        </div>
                                                </div>
                                            </div>    
                                            )
                                        })}
                                    </div> 
                                                
                </div>
                
            </div>
            <div className="rowouter">
                <div className="rowParent">
                <div className="columnone">
                        <span className="web_wishlist">
                            <i class="fa-solid fa-play"></i>
                        </span>
                        <span className="web_text" >
                            Learn in-demand skills with over 210,000 video courses
                        </span>
                </div>
                <div className="columnone">
                        <span className="web_wishlist">
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <span className="web_text">
                            Choose courses taught by real-world experts
                        </span>
                </div>
                <div className="columnone">
                        <span className="web_wishlist">
                            <i class="fa-solid fa-play"></i>
                        </span>
                        <span className="web_text">
                            Learn at your own pace, with lifetime access on mobile and desktop
                        </span>
                </div>
                </div>
            </div>

            <div className="tablecontainer">
                <h1>Popular topics</h1>
                <table>
                   
                    <thead>
                        <tr>
                            <th>Web development</th>
                            <th>React js</th>
                            <th>CSS</th>
                            <th>ASP.NET Core</th>
                            <th>Redux Framework</th>
                        </tr>
                        <br/>
                        <tr>
                            <th>JavaScript</th>
                            <th>Angular</th>
                            <th>Node.Js</th>
                            <th>Typescript</th>
                            <th>Next.js</th>
                        </tr>
                    </thead>
                </table>
            </div>
            {/* popularInstructor */}
            <div className="popularInstructor">
                <h1>Popular Instructors</h1>
                <div className="card_divouterrow">
                    <div className="card_divrow">
                        <div className="imgparent">
                            <img src="https://img-c.udemycdn.com/user/200_H/7799204_2091_5.jpg" alt="not found"/>
                        </div>
                        <div className="instructor_review">
                            <span><b>Jonas Schmedtmann</b></span>
                            <span>JavaScript, React JS</span>
                            <span><b>4.6</b> ⭐ Instructor Rating</span>
                            <span><b>1,831,276 </b>students</span>
                            <span><b>7 </b>Courses</span>
                        </div>
                    </div>
                    <div className="card_divrow">
                    <div className="imgparent">
                            <img src="https://img-c.udemycdn.com/user/200_H/13952972_e853.jpg" alt="not found"/>
                        </div>
                        <div className="instructor_review">
                            <span><b>Maximilian Schwarzmüller</b></span>
                            <span>Angular , Next.js</span>
                            <span><b>4.6</b> ⭐ Instructor Rating</span>
                            <span><b>2,745,216</b> students</span>
                            <span><b>60</b>Courses</span>
                        </div>
                    </div>
                    <div className="card_divrow">
                    <div className="imgparent">
                            <img src="https://img-c.udemycdn.com/user/200_H/13952972_e853.jpg" alt="not found"/>
                        </div>
                        <div className="instructor_review">
                            <span><b>Maximilian Schwarzmüller</b></span>
                            <span>Dovker Typescript</span>
                            <span><b>4.6 </b>⭐ Instructor Rating</span>
                            <span><b>2,710,698 </b>students</span>
                            <span><b>47 </b>Courses</span>
                        </div>
                    </div>
                    <div className="card_divrow">
                    <div className="imgparent">
                            <img src="https://img-c.udemycdn.com/user/200_H/5487312_0554.jpg" alt="not found"/>
                        </div>
                        <div className="instructor_review">
                            <span><b>Stephen grider</b></span>
                            <span>React js,Node.js</span>
                            <span><b>4.6 </b>⭐ Instructor Rating</span>
                            <span><b>1,831,276</b> students</span>
                            <span><b>35 </b>Courses</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* All Web Development courses */}
            <div className="AllWebDevelopment">
                <h1>All Web Development courses</h1>
                <div className="alert_div">
                    <span className="alert_icon"><i class="fa-solid fa-circle-exclamation"></i></span>
                    <span>Not sure? All courses have a 30-day money-back guarantee</span>
                </div>
            </div>
            {/* filter row */}
            <div className="filter_parent">
                <div className="filter_row">
                  <div>
                    <button className="filter">
                        <i class="fa-solid fa-filter"></i> Filter
                    </button>
                    <button className="sort">
                        sort by <i class="fa-solid fa-chevron-down"></i> <br/>MOST POPULAR 
                    </button>
                  </div>
                  <span className="result">
                        10,000 results
                  </span>
                </div>
                
            </div>
            {/* Ratings and coloumn wise cards */}
        
        <div className="webcardcontainer_parent">
            <div className="webcardcontainer">
                <div className="rating_div_coloumn">
                    <span className="textrating">&nbsp;&nbsp;Ratings
                        <sapn className="upangleicon">
                        <i class="fa-solid fa-angle-up"></i>
                        </sapn>
                    </span>
                    <div className="rating_div_row_parent">
                        <div className="rating_div_row">
                            <span>
                            <i class="fa-regular fa-circle"></i>
                            </span>  
                            <span className="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                            </span>
                            <span><b> 4.5 & up </b> (4,042)</span>
                        </div>
                        <div className="rating_div_row">
                            <span>
                            <i class="fa-regular fa-circle"></i>
                            </span>  
                            <span className="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            </span>
                            <span><b>4.5 & up </b>  (4,042)</span>
                        </div>
                        <div className="rating_div_row">
                            <span>
                            <i class="fa-regular fa-circle"></i>
                            </span>  
                            <span className="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                            </span>
                            <span> <b> 4.5 & up</b> (4,042)</span>
                        </div>
                        <div className="rating_div_row">
                            <span>
                            <i class="fa-regular fa-circle"></i>
                            </span>  
                            <span className="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            </span>
                            <span><b> 4.5 & up</b> (4,042)</span>
                        </div>
                    </div>
                
                </div>
                {/* coloumnwise card */}
               <div>
               <div className="webcardparent">
                        {bussiness.filter((item)=>(item.id>105) && (item.id<109)).map((item,index)=>{
                            return(
                                <>
                                        <div className="webcard_row">
                                            <div className="webimg">
                                                <img src={item.img} alt="not found"/>
                                            </div>
                                           
                                            <div className="webcarddetail">
                                                <div className="row1">
                                                    <span>{item.heading}</span>
                                                    <span><i class="fa-solid fa-indian-rupee-sign"></i>{item.price}</span>
                                                </div>
                                                <div>{item.name}</div>
                                                <div className="row_rating"> 
                                                    <span className="ratingtext">{item.rating}</span>
                                                    <span className="rating">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star-half-stroke"></i>
                                                    <i class="fa-regular fa-star"></i>
                                                    </span>
                                                    <span>({item.viewer}) </span>
                                                </div>
                                                <div className="totalhrs">{item.total_hrs} total hours . {item.previous_price} . All Levels</div>
                                                <div className="bestseller">Best seller</div>

                                            </div>
                                    
                                        {/* CARD ON HOVER */}
                                           <div className="webcardhover">
                                                <div className="wedcardhoverdetail">
                                                    
                                                    <h5>{item.para}</h5>
                                                    <div className="webpoints">
                                                        <p><i class="fa-solid fa-check"></i></p>
                                                        <p className="keypoint">{item.key_1}</p>
                                                    </div>
                                                    <div className="webpoints">
                                                        <p><i class="fa-solid fa-check"></i></p>
                                                        <p className="keypoint">{item.key_1}</p>
                                                    </div>
                                                    <div className="webpoints">
                                                        <p><i class="fa-solid fa-check"></i></p>
                                                        <p className="keypoint">{item.key_1}</p>
                                                    </div>

                                                    <div className="webhoveraddtocart">
                                                    <button className="webaddtocartbutton">
                                                        Add to cart
                                                    </button>
                                                    <div className="webwishlist">
                                                        <i class="fa-regular fa-heart"></i>
                                                    </div>
                                                    
                                                </div> 
                                                </div>
                                            </div> 
                                        </div>    
                                </>
                            )
                        })}


                        <div className="ads">
                            <div className="row1">
                                <h2>Top companies trust Udemy</h2>
                                <div>Get your team access to Udemy's top 25,000+ courses</div>
                            </div>
                            <div className="iconparent">
                                <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="not found"/>
                                <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="not found"/>
                                <img src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="not found"/>
                                <img src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="not found"/>
                                <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="not found"/>
                            </div>
    
                        </div>

                </div>

                <div className="webcardlast">
                        {bussiness.filter((item)=>(item.id>108) && (item.id<114)).map((item,index)=>{
                            return(
                                <>
                                        <div className="webcard_row">
                                            <div className="webimg">
                                                <img src={item.img} alt="not found"/>
                                            </div>
                                           
                                            <div className="webcarddetail">
                                                <div className="row1">
                                                    <span>{item.heading}</span>
                                                    <span><i class="fa-solid fa-indian-rupee-sign"></i>{item.price}</span>
                                                </div>
                                                <div>{item.name}</div>
                                                <div className="row_rating"> 
                                                    <span className="ratingtext">{item.rating}</span>
                                                    <span className="rating">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star-half-stroke"></i>
                                                    <i class="fa-regular fa-star"></i>
                                                    </span>
                                                    <span>({item.viewer}) </span>
                                                </div>
                                                <div className="totalhrs">{item.total_hrs} total hours . {item.previous_price} . All Levels</div>
                                                <div className="bestseller">Best seller</div>

                                            </div>
                                    
                                        {/* CARD ON HOVER */}
                                           <div className="webcardhover">
                                                <div className="wedcardhoverdetail">
                                                    
                                                    <h5>{item.para}</h5>
                                                    <div className="webpoints">
                                                        <p><i class="fa-solid fa-check"></i></p>
                                                        <p className="keypoint">{item.key_1}</p>
                                                    </div>
                                                    <div className="webpoints">
                                                        <p><i class="fa-solid fa-check"></i></p>
                                                        <p className="keypoint">{item.key_1}</p>
                                                    </div>
                                                    <div className="webpoints">
                                                        <p><i class="fa-solid fa-check"></i></p>
                                                        <p className="keypoint">{item.key_1}</p>
                                                    </div>

                                                    <div className="webhoveraddtocart">
                                                    <button className="webaddtocartbutton">
                                                        Add to cart
                                                    </button>
                                                    <div className="webwishlist">
                                                        <i class="fa-regular fa-heart"></i>
                                                    </div>
                                                    
                                                </div> 
                                                </div>
                                            </div> 
                                        </div>    
                                </>
                            )
                        })}
                </div>
               </div>


            </div>
        </div>

       </>
    )
}
export default Management
              
