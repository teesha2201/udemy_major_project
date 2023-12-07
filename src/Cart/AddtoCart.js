import React, { useState,useEffect } from "react";
import "./AddtoCart.css"

import {loadStripe} from '@stripe/stripe-js';
import axios from "axios";

const AddtoCart = () => {

 const [cart ,setCart] = useState([]);
 
 console.log(cart);
  const [total,setTotal] = useState();

 useEffect(()=>{
  axios.get('http://localhost:4005/udemy/getaddtocart')
  .then(res=>setCart(res.data))
  .catch((err)=>console.log(err))
},[]) 

  useEffect(()=>{
    let amount= 0;
    cart.map((item)=>amount+=item.price)
    setTotal(amount);
  },[cart])

  //payment integration
  const makePayment = async ()=>{
    const stripe = await loadStripe("pk_test_51OFcxhSJ9imTpFOMrr7cLjkKItk8MT04D4U3l2L9diYzzh7XSJ4IGUgyk7EA1JjKzVm1gm51ePzgHGkXk3zaTweX00CcmdCw7g");
    const body = {
      products: cart
    }
    const headers = {
      "Content-Type":"application/json"
    }
    const response = await fetch("http://localhost:4005/udemy/create-checkout-session",{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
    })
    await axios.post("http://localhost:4005/udemy/learnercart",cart)
    await axios.delete("http://localhost:4005/udemy/cartdelete")
    const session = await response.json();
    const result  = stripe.redirectToCheckout({
      sessionId:session.id
    });
    if(result.error){
      console.log(result.error);
    }
  }
  return (
    <div className="main">
          <div className="flexdiv">
              <h2 className="headcart">Shopping Cart</h2>
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
                     
                      <p><b>Course:</b>{item.heading}</p>  
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
                      <button className="removebtn">Remove Item</button>
                   </div>
                   {/* remove button */}
                </div>
              );
            })}
    
        
            <div className="parent_total_buy">
            <div className="total">
              <h2>Total Amount(in Rs.) :<span style={{ color: "green" }}>{total} </span> </h2>
              
            </div>
            <div className="buy">
              <button className="checkout" onClick={makePayment}>Checkout</button>
            </div>
            </div>
        
      </div>
     
   
  );
};

export default AddtoCart;