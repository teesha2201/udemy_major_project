import React,{useState,useEffect} from "react";
import "./Home_Style.css";
import axios from "axios";


const HomeContainer =()=>{
    const [home,setHome] = useState([])
 
useEffect(()=>{
 
      axios.get('http://localhost:4005/udemy/getdatafromstore')
          .then((res)=>{setHome(res.data);
            console.log(res.data)    
        })
          .catch((err)=>console.log(err))
    
    },[])

    return(
        < >
            {home.filter((item,index)=>item.id===1).map((item,index)=>{
                return(
                    <div className="image_div" key={index}>
                        <img src={item.img} alt="Not Found" className="home_img_first"/>
                        <div className="home_text_msg">
                            <ul>
                                <li>
                                    <h1 className="heading">The Skills You need</h1>
                                </li>
                                <li>
                                    Discover the courses that will help you get where you want to go.
                                </li>
                            </ul>
                    </div>
                    </div>

                )
            })}
           
          
          
            <div className="home_second_div">
                <div className="home_second_div_text">
                    Trusted by over 15,000 companies and millions of learners around the world
                </div>
                 
                <div className="home_second_img_div">
                {home.filter((item,index)=>item.id===2).map((item,index)=>{ 
                    return(
                        <img src={item.img} alt="Not Found"/>
                    ) 
                })}
                {home.filter((item,index)=>item.id===3).map((item,index)=>{ 
                    return(
                        <img src={item.img} alt="Not Found"/>
                    ) 
                })}
                {home.filter((item,index)=>item.id===4).map((item,index)=>{ 
                    return(
                        <img src={item.img} alt="Not Found"/>
                    ) 
                })}
                {home.filter((item,index)=>item.id===5).map((item,index)=>{ 
                    return(
                        <img src={item.img} alt="Not Found"/>
                    ) 
                })}
                {home.filter((item,index)=>item.id===6).map((item,index)=>{ 
                    return(
                        <img src={item.img} alt="Not Found"/>
                    ) 
                })}
                {home.filter((item,index)=>item.id===7).map((item,index)=>{ 
                    return(
                        <img src={item.img} alt="Not Found"/>
                    ) 
                })}
                {home.filter((item,index)=>item.id===8).map((item,index)=>{ 
                    return(
                        <img src={item.img} alt="Not Found"/>
                    ) 
                })}
                 
                </div>
                  
            </div>
              
                  {/*cards  */}
            <div className="home_third_div_parent">
                
          
            {home.filter((item,index)=>item.id===9).map((item,index)=>{
                return(
                    <>
                        <div className="home_career_div">
                            <div className="home_third_div">
                                <h1 className="inner_div_first">A broad selection of courses</h1>
                                <div className="inner_div_second">Choose from over 210,000 online video courses with new additions published every month</div>
                                <div className="inner_div_third">
                                
                                    <span className="python">Python</span>
                                    <span>Excel</span>
                                    <span>Web Development</span>
                                    <span>JavaScript</span>
                                    <span>Data Science</span>
                                    <span>Amazon AWS</span>
                                    <span>Drawing</span>
                            
                                </div>
                            </div>    
                            <div className="career_div_first">
                                <div className="career_inner_div">
                                    <h1>{item.heading}</h1>
                                    <p className="para">{item.para}...</p>
                                    <div className="explore">
                                        <button className="explore_btn">Explore Python</button>
                                    </div>
                                </div>
                            
                                <div className="cardrow">
                                <div className="cardParent">
                                    {home.filter((item,index)=>(item.id===14)).map((item,index)=>{
                                    return(
                                        <div key={index} className="cardContainer">
                                            <div className="singleCard">
                                                    <div className="card">
                                                        <img src={item.img} alt="not found"/> 
                                                    </div>
                                                    <div className="carddetails">
                                                        <p className="cardheading">
                                                            {item.heading}
                                                        </p>
                                                        <p className="cardname">
                                                            {item.name}
                                                        </p>
                                                        <p className="cardrating">
                                                            {item.rating}⭐⭐⭐⭐⭐
                                                            <span className="cardviewer">
                                                                ({item.viewer})
                                                            </span>
                                                        </p>
                                                        <p className="cardprice">
                                                            <i class="fa-solid fa-indian-rupee-sign"></i>
                                                            {item.price} &nbsp;&nbsp; 
                                                            <span className="cardpreviousPrice">
                                                            
                                                            <i class="fa-solid fa-indian-rupee-sign"></i>
                                                            {item.previous_price}
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <div className="cardhover cardhover1">
                                                    <div className="heading">{item.heading}</div>
                                                    <div className="updated">
                                                        <span className="bestseller">BestSeller</span>
                                                        <span className="updatedtext">updated </span>
                                                        <span className="updatedate">{item.updated_date}</span>
                                                    </div>
                                                    
                                                    <div className="totalhrs">
                                                        <span>{item.total_hrs}total hours</span>
                                                        <span> . All Levels</span>
                                                        <span> . Subtitles</span>
                                                    </div> 
                                                    
                                                    <div className="aboutparent">
                                                        <div className="about">{item.para}</div>
                                                    </div>
                                                
                                                    <div className="points">
                                                        <div className="pointOne">
                                                            <span><i class="fa-solid fa-check"></i></span>
                                                            <span>   {item.key_1}</span>
                                                        </div>
                                                        <div className="pointtwo">
                                                        <span><i class="fa-solid fa-check"></i></span>
                                                            <span>   {item.key_2}</span>
                                                        </div>
                                                        <div className="pointthree">
                                                        <span><i class="fa-solid fa-check"></i></span>
                                                            <span>   {item.key_3}</span>
                                                        </div>
                                                    </div> 

                                                    <div className="hoveraddtocart">
                                                        <button className="addtocartbutton">
                                                            Add to cart
                                                        </button>
                                                        <div className="wishlist">
                                                            <i class="fa-regular fa-heart"></i>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>    
                                        )
                                    })}
                                </div> 
                                <div className="cardParent">
                                    {home.filter((item,index)=>(item.id===11)).map((item,index)=>{
                                    return(
                                        <div key={index} className="cardContainer">
                                            <div className="singleCard">
                                                    <div className="card">
                                                        <img src={item.img} alt="not found" /> 
                                                    </div>
                                                    <div className="carddetails">
                                                        <p className="cardheading">
                                                            {item.heading}
                                                        </p>
                                                        <p className="cardname">
                                                            {item.name}
                                                        </p>
                                                        <p className="cardrating">
                                                            {item.rating}⭐⭐⭐⭐⭐
                                                            <span className="cardviewer">
                                                                ({item.viewer})
                                                            </span>
                                                        </p>
                                                        <p className="cardprice">
                                                            <i class="fa-solid fa-indian-rupee-sign"></i>
                                                            {item.price} &nbsp;&nbsp; 
                                                            <span className="cardpreviousPrice">
                                                            
                                                            <i class="fa-solid fa-indian-rupee-sign"></i>
                                                            {item.previous_price}
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <div className=" cardhover cardhover2">
                                                    <div className="heading">{item.heading}</div>
                                                    <div className="updated">
                                                        <span className="bestseller">BestSeller</span>
                                                        <span className="updatedtext">updated </span>
                                                        <span className="updatedate">{item.updated_date}</span>
                                                    </div>
                                                    
                                                    <div className="totalhrs">
                                                        <span>{item.total_hrs}total hours</span>
                                                        <span> . All Levels</span>
                                                        <span> . Subtitles</span>
                                                    </div> 
                                                    
                                                    <div className="aboutparent">
                                                        <div className="about">{item.para}</div>
                                                    </div>
                                                
                                                    <div className="points">
                                                        <div className="pointOne">
                                                            <span><i class="fa-solid fa-check"></i></span>
                                                            <span>   {item.key_1}</span>
                                                        </div>
                                                        <div className="pointtwo">
                                                            <span><i class="fa-solid fa-check"></i></span>
                                                            <span>   {item.key_2}</span>
                                                        </div>
                                                        <div className="pointthree">
                                                            <span><i class="fa-solid fa-check"></i></span>
                                                            <span>   {item.key_3}</span>
                                                        </div>
                                                    </div>

                                                    <div className="hoveraddtocart">
                                                        <button className="addtocartbutton">
                                                            Add to cart
                                                        </button>
                                                        <div className="wishlist">
                                                            <i class="fa-regular fa-heart"></i>
                                                        </div>
                                                    </div>
 
                                                    </div>
                                            </div>
                                        </div>    
                                        )
                                    })}
                                </div> 
                                <div className="cardParent">
                                    {home.filter((item,index)=>(item.id===12)).map((item,index)=>{
                                    return(
                                        <div key={index} className="cardContainer">
                                            <div className="singleCard">
                                                    <div className="card">
                                                        <img src={item.img} alt="not found"/> 
                                                    </div>
                                                    <div className="carddetails">
                                                        <p className="cardheading">
                                                            {item.heading}
                                                        </p>
                                                        <p className="cardname">
                                                            {item.name}
                                                        </p>
                                                        <p className="cardrating">
                                                            {item.rating}⭐⭐⭐⭐⭐
                                                            <span className="cardviewer">
                                                                ({item.viewer})
                                                            </span>
                                                        </p>
                                                        <p className="cardprice">
                                                            <i class="fa-solid fa-indian-rupee-sign"></i>
                                                            {item.price} &nbsp;&nbsp; 
                                                            <span className="cardpreviousPrice">
                                                            
                                                            <i class="fa-solid fa-indian-rupee-sign"></i>
                                                            {item.previous_price}
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <div className="cardhover cardhover3">
                                                    <div className="heading">{item.heading}</div>
                                                    <div className="updated">
                                                        <span className="bestseller">BestSeller</span>
                                                        <span className="updatedtext">updated </span>
                                                        <span className="updatedate">{item.updated_date}</span>
                                                    </div>
                                                    
                                                    <div className="totalhrs">
                                                        <span>{item.total_hrs}total hours</span>
                                                        <span> . All Levels</span>
                                                        <span> . Subtitles</span>
                                                    </div> 
                                                    
                                                    <div className="aboutparent">
                                                        <div className="about">{item.para}</div>
                                                    </div>
                                                
                                                    <div className="points">
                                                        <div className="pointOne">
                                                            <span><i class="fa-solid fa-check"></i></span>
                                                            <span>   {item.key_1}</span>
                                                        </div>
                                                        <div className="pointtwo">
                                                            <span><i class="fa-solid fa-check"></i></span>
                                                            <span>   {item.key_2}</span>
                                                        </div>
                                                        <div className="pointthree">
                                                        <span><i class="fa-solid fa-check"></i></span>
                                                            <span>   {item.key_3}</span>
                                                        </div>
                                                    </div> 

                                                    <div className="hoveraddtocart">
                                                        <button className="addtocartbutton">
                                                            Add to cart
                                                        </button>
                                                        <div className="wishlist">
                                                            <i class="fa-regular fa-heart"></i>
                                                        </div>
                                                    </div>
                                                    </div>
                                            </div>
                                        </div>    
                                        )
                                    })}
                                </div> 
                                <div className="cardParent">
                                    {home.filter((item,index)=>(item.id===13)).map((item,index)=>{
                                    return(
                                        <div key={index} className="cardContainer">
                                            <div className="singleCard">
                                                    <div className="card">
                                                        <img src={item.img} alt="not found"/> 
                                                    </div>
                                                    <div className="carddetails">
                                                        <p className="cardheading">
                                                            {item.heading}
                                                        </p>
                                                        <p className="cardname">
                                                            {item.name}
                                                        </p>
                                                        <p className="cardrating">
                                                            {item.rating}⭐⭐⭐⭐⭐
                                                            <span className="cardviewer">
                                                                ({item.viewer})
                                                            </span>
                                                        </p>
                                                        <p className="cardprice">
                                                            <i class="fa-solid fa-indian-rupee-sign"></i>
                                                            {item.price} &nbsp;&nbsp; 
                                                            <span className="cardpreviousPrice">
                                                            
                                                            <i class="fa-solid fa-indian-rupee-sign"></i>
                                                            {item.previous_price}
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <div className=" cardhover cardhover4">
                                                    <div className="heading">{item.heading}</div>
                                                    <div className="updated">
                                                        <span className="bestseller">BestSeller</span>
                                                        <span className="updatedtext">updated </span>
                                                        <span className="updatedate">{item.updated_date}</span>
                                                    </div>
                                                    
                                                    <div className="totalhrs">
                                                        <span>{item.total_hrs}total hours</span>
                                                        <span> . All Levels</span>
                                                        <span> . Subtitles</span>
                                                    </div> 
                                                    
                                                    <div className="aboutparent">
                                                        <div className="about">{item.para}</div>
                                                    </div>
                                                
                                                    <div className="points">
                                                        <div className="pointOne">
                                                            <span><i class="fa-solid fa-check"></i></span>
                                                            <span>   {item.key_1}</span>
                                                        </div>
                                                        <div className="pointtwo">
                                                            <span><i class="fa-solid fa-check"></i></span>
                                                            <span>   {item.key_2}</span>
                                                        </div>
                                                        <div className="pointthree">
                                                            <span><i class="fa-solid fa-check"></i></span>
                                                            <span>   {item.key_3}</span>
                                                        </div>
                                                    </div> 

                                                    <div className="hoveraddtocart">
                                                        <button className="addtocartbutton">
                                                            Add to cart
                                                        </button>
                                                        <div className="wishlist">
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
                        </div>
                    </>
                    )
            })}
                                

                                
            </div>
        
            <div className="goalsContainer">
                <div className="goalsHeading">
                    How learners like you are achieving their goals
                </div>
                <div className="goalCardrow">
                    {home.filter((item,index)=>(item.id>=16 && item.id<=18)).map((item,index)=>{
                        return(
                            <>
                                <div className="learners_card">
                                    <div className="learners_card_innercover">
                                        <p>
                                            <i class="fa-solid fa-quote-left"></i>
                                        </p>
                                        <p className="goalpara">
                                            {item.para}
                                        </p>
                                        <div className="rowparent">
                                            <div className="circle">
                                                {item.name[0]}{item.name[item.name.length-1]}
                                            </div>
                                            <div className="name">
                                                {item.name}
                                            </div>
                                            
                                        </div>
                                        <br/>
                                         <hr/> 
                                    </div>
                                        
                                    <div className="videoparent">
                                            <div className="videocircle">
                                            <i class="fa-solid fa-play"></i>
                                            </div>
                                            <div className="videotext">
                                                {item.key_1}
                                            </div>
                                    
                                    </div>
                                </div>
                                
                                
                            </>
                        )
                    })}
                </div>
            </div>
            
        <div className="Learners_div">
            <h1 className="Learners_title">
                Learners are viewing
            </h1>
            <div className="cardrow1">
                            <div className="cardParent1">
                                
                                {home.filter((item,index)=>(item.id===20)).map((item,index)=>{
                                return(
                                    <div key={index} className="cardContainer2">
                                       
                                        <div className="singleCard1">
                                                <div className="card1">
                                                    <img src={item.img} alt="not found"/> 
                                                </div>
                                                <div className="carddetails">
                                                    <p className="cardheading">
                                                        {item.heading}
                                                    </p>
                                                    <p className="cardname">
                                                        {item.name}
                                                    </p>
                                                    <p className="cardrating">
                                                        {item.rating}⭐⭐⭐⭐⭐
                                                        <span className="cardviewer">
                                                            ({item.viewer})
                                                        </span>
                                                    </p>
                                                    <p className="cardprice">
                                                        <i class="fa-solid fa-indian-rupee-sign"></i>
                                                        {item.price} &nbsp;&nbsp; 
                                                        <span className="cardpreviousPrice">
                                                        
                                                        <i class="fa-solid fa-indian-rupee-sign"></i>
                                                        {item.previous_price}
                                                        </span>
                                                    </p>
                                                </div>

                                                <div className="cardhover cardhover1">
                                                <div className="heading">{item.heading}</div>
                                                <div className="updated">
                                                    <span className="bestseller">BestSeller</span>
                                                    <span className="updatedtext">updated </span>
                                                    <span className="updatedate">{item.updated_date}</span>
                                                </div>
                                                
                                                <div className="totalhrs">
                                                    <span>{item.total_hrs}total hours</span>
                                                    <span> . All Levels</span>
                                                    <span> . Subtitles</span>
                                                </div> 
                                                
                                                <div className="aboutparent">
                                                    <div className="about">{item.para}</div>
                                                </div>
                                            
                                                <div className="points">
                                                    <div className="pointOne">
                                                        <span><i class="fa-solid fa-check"></i></span>
                                                        <span>   {item.key_1}</span>
                                                    </div>
                                                    <div className="pointtwo">
                                                        <span><i class="fa-solid fa-check"></i></span>
                                                        <span>   {item.key_2}</span>
                                                    </div>
                                                    <div className="pointthree">
                                                        <span><i class="fa-solid fa-check"></i></span>
                                                        <span>   {item.key_3}</span>
                                                    </div>
                                                </div> 

                                                <div className="hoveraddtocart">
                                                    <button className="addtocartbutton">
                                                        Add to cart
                                                    </button>
                                                    <div className="wishlist">
                                                        <i class="fa-regular fa-heart"></i>
                                                    </div>
                                                </div>
                                                </div>
                                        </div>
                                    </div>    
                                    )
                                })}
                            </div> 
                            <div className="cardParent1">
                                {home.filter((item,index)=>(item.id===21)).map((item,index)=>{
                                return(
                                    <div key={index} className="cardContainer2">
                                        <div className="singleCard1">
                                                <div className="card1">
                                                    <img src={item.img} alt="not found"/> 
                                                </div>
                                                <div className="carddetails">
                                                    <p className="cardheading">
                                                        {item.heading}
                                                    </p>
                                                    <p className="cardname">
                                                        {item.name}
                                                    </p>
                                                    <p className="cardrating">
                                                        {item.rating}⭐⭐⭐⭐⭐
                                                        <span className="cardviewer">
                                                            ({item.viewer})
                                                        </span>
                                                    </p>
                                                    <p className="cardprice">
                                                        <i class="fa-solid fa-indian-rupee-sign"></i>
                                                        {item.price} &nbsp;&nbsp; 
                                                        <span className="cardpreviousPrice">
                                                        
                                                        <i class="fa-solid fa-indian-rupee-sign"></i>
                                                        {item.previous_price}
                                                        </span>
                                                    </p>
                                                </div>

                                                <div className=" cardhover cardhover2">
                                                <div className="heading">{item.heading}</div>
                                                <div className="updated">
                                                    <span className="bestseller">BestSeller</span>
                                                    <span className="updatedtext">updated </span>
                                                    <span className="updatedate">{item.updated_date}</span>
                                                </div>
                                                
                                                <div className="totalhrs">
                                                    <span>{item.total_hrs}total hours</span>
                                                    <span> . All Levels</span>
                                                    <span> . Subtitles</span>
                                                </div> 
                                                
                                                <div className="aboutparent">
                                                    <div className="about">{item.para}</div>
                                                </div>

                                                <div className="points">
                                                    <div className="pointOne">
                                                        <span><i class="fa-solid fa-check"></i></span>
                                                        <span>   {item.key_1}</span>
                                                    </div>
                                                    <div className="pointtwo">
                                                        <span><i class="fa-solid fa-check"></i></span>
                                                        <span>   {item.key_2}</span>
                                                    </div>
                                                    <div className="pointthree">
                                                        <span><i class="fa-solid fa-check"></i></span>
                                                        <span>   {item.key_3}</span>
                                                    </div>
                                                </div> 

                                                <div className="hoveraddtocart">
                                                    <button className="addtocartbutton">
                                                        Add to cart
                                                    </button>
                                                    <div className="wishlist">
                                                        <i class="fa-regular fa-heart"></i>
                                                    </div>
                                                </div>
                                                </div>
                                        </div>
                                    </div>    
                                    )
                                })}
                            </div> 
                            <div className="cardParent1">
                                {home.filter((item,index)=>(item.id===12)).map((item,index)=>{
                                return(
                                    <div key={index} className="cardContainer2">
                                        <div className="singleCard1">
                                                <div className="card1">
                                                    <img src={item.img} alt="not found"/> 
                                                </div>
                                                <div className="carddetails">
                                                    <p className="cardheading">
                                                        {item.heading}
                                                    </p>
                                                    <p className="cardname">
                                                        {item.name}
                                                    </p>
                                                    <p className="cardrating">
                                                        {item.rating}⭐⭐⭐⭐⭐
                                                        <span className="cardviewer">
                                                            ({item.viewer})
                                                        </span>
                                                    </p>
                                                    <p className="cardprice">
                                                        <i class="fa-solid fa-indian-rupee-sign"></i>
                                                        {item.price} &nbsp;&nbsp; 
                                                        <span className="cardpreviousPrice">
                                                        
                                                        <i class="fa-solid fa-indian-rupee-sign"></i>
                                                        {item.previous_price}
                                                        </span>
                                                    </p>
                                                </div>

                                                <div className="cardhover cardhover3">
                                                <div className="heading">{item.heading}</div>
                                                <div className="updated">
                                                    <span className="bestseller">BestSeller</span>
                                                    <span className="updatedtext">updated </span>
                                                    <span className="updatedate">{item.updated_date}</span>
                                                </div>
                                                
                                                <div className="totalhrs">
                                                    <span>{item.total_hrs}total hours</span>
                                                    <span> . All Levels</span>
                                                    <span> . Subtitles</span>
                                                </div> 
                                                
                                                <div className="aboutparent">
                                                    <div className="about">{item.para}</div>
                                                </div>
                                            
                                                <div className="points">
                                                    <div className="pointOne">
                                                        <span><i class="fa-solid fa-check"></i></span>
                                                        <span>   {item.key_1}</span>
                                                    </div>
                                                    <div className="pointtwo">
                                                        <span><i class="fa-solid fa-check"></i></span>
                                                        <span>   {item.key_2}</span>
                                                    </div>
                                                    <div className="pointthree">
                                                        <span><i class="fa-solid fa-check"></i></span>
                                                        <span>   {item.key_3}</span>
                                                    </div>
                                                </div> 

                                                <div className="hoveraddtocart">
                                                    <button className="addtocartbutton">
                                                        Add to cart
                                                    </button>
                                                    <div className="wishlist">
                                                        <i class="fa-regular fa-heart"></i>
                                                    </div>
                                                </div> 
                                                </div>
                                        </div>
                                    </div>    
                                    )
                                })}
                            </div> 
                            <div className="cardParent1">
                                {home.filter((item,index)=>(item.id===13)).map((item,index)=>{
                                return(
                                    <div key={index} className="cardContainer2">
                                        <div className="singleCard1">
                                                <div className="card1">
                                                    <img src={item.img} alt="not found"/> 
                                                </div>
                                                <div className="carddetails">
                                                    <p className="cardheading">
                                                        {item.heading}
                                                    </p>
                                                    <p className="cardname">
                                                        {item.name}
                                                    </p>
                                                    <p className="cardrating">
                                                        {item.rating}⭐⭐⭐⭐⭐
                                                        <span className="cardviewer">
                                                            ({item.viewer})
                                                        </span>
                                                    </p>
                                                    <p className="cardprice">
                                                        <i class="fa-solid fa-indian-rupee-sign"></i>
                                                        {item.price} &nbsp;&nbsp; 
                                                        <span className="cardpreviousPrice">
                                                        
                                                        <i class="fa-solid fa-indian-rupee-sign"></i>
                                                        {item.previous_price}
                                                        </span>
                                                    </p>
                                                </div>

                                                <div className=" cardhover cardhover4">
                                                <div className="heading">{item.heading}</div>
                                                <div className="updated">
                                                    <span className="bestseller">BestSeller</span>
                                                    <span className="updatedtext">updated </span>
                                                    <span className="updatedate">{item.updated_date}</span>
                                                </div>
                                                
                                                <div className="totalhrs">
                                                    <span>{item.total_hrs}total hours</span>
                                                    <span> . All Levels</span>
                                                    <span> . Subtitles</span>
                                                </div> 
                                                
                                                <div className="aboutparent">
                                                    <div className="about">{item.para}</div>
                                                </div>
                                            
                                                <div className="points">
                                                    <div className="pointOne">
                                                        <span><i class="fa-solid fa-check"></i></span>
                                                        <span>   {item.key_1}</span>
                                                    </div>
                                                    <div className="pointtwo">
                                                        <span><i class="fa-solid fa-check"></i></span>
                                                        <span>   {item.key_2}</span>
                                                    </div>
                                                    <div className="pointthree">
                                                        <span><i class="fa-solid fa-check"></i></span>
                                                        <span>   {item.key_3}</span>
                                                    </div>
                                                </div> 

                                                <div className="hoveraddtocart">
                                                    <button className="addtocartbutton">
                                                        Add to cart
                                                    </button>
                                                    <div className="wishlist">
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

            <div  className="top_categories">
                <h1  className="Learners_title">
                    Top categories
                </h1>
                <div className="top_inner_parent">
                    {home.filter((item,index)=>((item.id>=22) && (item.id<=29))).map((item,index)=>{
                    return(
                        <>
                            <div className="top_inner_div">
                                <img src={item.img} alt="not found"/>
                                <h4>{item.heading}</h4>
                            </div>
                        </>    
                    )
                    })}
                </div>
            </div>
        </div>

        {/* <div> */}
            {/* Featured topics by category */}
        <div  className="Featured_top_categories">
            <h2>
            Featured topics by category
            </h2>
                <div className="top_inner_parent">
                               <table>
                                    <thead>
                                        <tr>
                                            <th>Development</th>
                                            <th>Business</th>
                                            <th>IT and Software</th>
                                            <th>Design</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Python</td>
                                            <td>Financial Analysis</td>
                                            <td>Amazon AWS</td>
                                            <td>Photoshop</td>
                                        </tr>
                                        <tr>
                                            <td>36,354,994 learners</td>
                                            <td>1,195,282 learners</td>
                                            <td>6,123,456 learners</td>
                                            <td>10,909,736 learners</td>
                                        </tr>
                                        <tr>
                                            <td>Web Development</td>
                                            <td>SQL</td>
                                            <td>Ethical Hacking</td>
                                            <td>Graphic Design</td>
                                        </tr>
                                        <tr>
                                            <td>11,415,615 learners</td>
                                            <td>5,977,561 learners</td>
                                            <td>10,931,066 learners</td>
                                            <td>3,381,052 learners</td>
                                        </tr>
                                        <tr>
                                            <td>Machine Learning</td>
                                            <td>PMP</td>
                                            <td>Cyber Security</td>
                                            <td>Drawing</td>
                                        </tr>
                                        <tr>
                                            <td>7,070,015 learners</td>
                                            <td>1,733,398 learners</td>
                                            <td>3,998,037 learners</td>
                                            <td>2,410,849 learners</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button>
                                                    Explore more topics
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                               </table>
                </div>
          
        </div>

        {/* </div> */}

        <div className="udemy_bussiness_parent"> 
            <div className="leftdiv">
                <div className="logo">
                    <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg" alt="not found"/>
                </div>
                <h1>
                    Upskill your team with Udemy Business
                </h1>
                <ul>
                    <li>Unlimited access to 25,000+ top Udemy courses, anytime, anywhere</li>
                    <li>International course collection in 14 languages</li>
                    <li>Top certifications in tech and business</li>
                </ul>
                <div className="btnparent">
                    <button className="getbtn">Get Udemy Bussiness</button>
                    <button className="learnbtn">Learn more</button>
                </div>
            </div>
            <div className="rightimg">
                <img src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg" alt="not found"/>
            </div>
        </div>

        <div className="principal_parent">
        <div className="principal">
            <div className="principal_inner_div">
                <div className="principal_left">
                    <span>
                    <i class="fa-solid fa-quote-left"></i>
                    </span>
                    <p>
                        Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its
                        <b> data scientists, with highly relevant and in-demand tech skills</b> that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.
                    </p>
                    <p className="read">Read full story</p>
                </div>
                <div className="principal_right">
                    <div>
                        <img src="https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg" alt="not found"/>
                    </div>
                    <p className="p1">Jim Hemgen</p>
                    <p className="p2">Principal</p>
                    <p className="p3">Booz Allen Hamilton</p>
                </div>
            </div>   
        </div>
        <h4>
            View more customer stories
        </h4>
        </div>

        <div className="secondlastdiv">
            <div className="imgparent">
                <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="not found"/>
            </div>
            <div className="parent_instructor">
                <div className="instructor">Become an instructor</div>
                <div className="aboutinstructor">
                    Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.
                </div>
                <button className="teachingbutton">
                    start teaching today
                </button>
            </div>

        </div>

        {/* Footer */}
    </>  
    )                          
}
export default HomeContainer



















 {/* 
 <div className="cardParent">
                                {home.filter((item,index)=>(item.id>=10 && item.id<=13)).map((item,index)=>{
                                return(
                                    <div key={index} className="cardContainer">
                                        <div className="singleCard">
                                                <div className="card">
                                                    <img src={item.img} /> 
                                                </div>
                                                <div className="carddetails">
                                                    <p className="cardheading">
                                                        {item.heading}
                                                    </p>
                                                    <p className="cardname">
                                                        {item.name}
                                                    </p>
                                                    <p className="cardrating">
                                                        {item.rating}⭐⭐⭐⭐⭐
                                                        <span className="cardviewer">
                                                            ({item.viewer})
                                                        </span>
                                                    </p>
                                                    <p className="cardprice">
                                                        <i class="fa-solid fa-indian-rupee-sign"></i>
                                                        {item.price} &nbsp;&nbsp; 
                                                        <span className="cardpreviousPrice">
                                                        
                                                        <i class="fa-solid fa-indian-rupee-sign"></i>
                                                        {item.previous_price}
                                                        </span>
                                                    </p>
                                                </div>

                                                <div className="cardhover">
                                                <div className="heading">{item.heading}</div>
                                                 <div className="updated">
                                                    <span className="bestseller">BestSeller</span>
                                                    <span className="updatedtext">updated </span>
                                                    <span className="updatedate">{item.updated_date}</span>
                                                </div>
                                                
                                                <div className="totalhrs">
                                                    <span>{item.total_hrs}total hours</span>
                                                    <span> . All Levels</span>
                                                    <span> . Subtitles</span>
                                                </div> 
                                                 
                                                <div className="aboutparent">
                                                    <div className="about">{item.para}</div>
                                                </div>
                                               
                                                <div className="points">
                                                    <div className="pointOne">
                                                        <span><i class="fa-regular fa-check"></i></span>
                                                        <span>   {item.key_1}</span>
                                                    </div>
                                                    <div className="pointtwo">
                                                        <span><i class="fa-regular fa-check"></i></span>
                                                        <span>   {item.key_2}</span>
                                                    </div>
                                                    <div className="pointthree">
                                                        <span><i class="fa-regular fa-check"></i></span>
                                                        <span>   {item.key_3}</span>
                                                    </div>
                                                </div> 
                                                </div>
                                        </div>
                                    </div>    
                                    )
                                })}
                            </div> 
                        */}