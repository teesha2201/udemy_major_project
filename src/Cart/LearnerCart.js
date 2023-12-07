import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const LearnerCart =()=>{
    const [cart,setCart] = useState([])
 
    useEffect(()=>{
     
          axios.get('http://localhost:4005/udemy//learningcartget')
              .then((res)=>{setCart(res.data);
                console.log(res.data)    
            })
              .catch((err)=>console.log(err))
        
        },[])



    return(
        <div className="main">
          <div className="flexdiv">
              
              <h2>Course Detail:-</h2>
          </div>
          {cart &&
            cart.map((item, index) => {
              return (
                <div className="cartContainer">
                   <div className="cartContainer_left">
                    
                    <img src={item.img} alt="not found"/>
                   </div>
                   <div className="cartContainer_right">
                     
                      <p><b>Course Name :</b>{item.heading}</p>  
                      <p><b>Author Name:</b>{item.name}</p>
                      <p><b>Rating:</b>
                      <span className="star">
                            <i className="fa-solid fa-star colorstar"></i>
                            <i className="fa-solid fa-star colorstar"></i>
                            <i className="fa-solid fa-star colorstar"></i>
                            <i className="fa-solid fa-star colorstar"></i>
                            <i className="fa-regular fa-star colorstar"></i>
                            </span>
                        {item.rating}
                        </p>
                      
                      <p><b>Price: </b><i class="fa-solid fa-indian-rupee-sign"></i>{item.price}</p>
                      <p><b>Course Update: </b> {item.updated_date}</p>
                      <p><b>Course duration:</b> {item.total_hrs}</p>
                      
                   </div>
                   {/* remove button */}
                </div>
              );
            })}
    
        
           
  
      </div>
    )
}
export default LearnerCart