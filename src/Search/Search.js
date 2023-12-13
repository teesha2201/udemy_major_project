import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState ,useEffect } from "react";
import "./Search.css" ;

export default function Search() {
  const location= useLocation()
  const data= location.state
  console.log(data)
  const [cart,setCart] = useState()
  useEffect(()=>{
    axios.get('https://udemy-backend-server.onrender.com/udemy/getaddtocart')
    .then(res=>setCart(res.data))
    .catch((err)=>console.log(err))
},[]) 
// console.log(cart)
const handleClick = async(item)=>{
    const findcart =  cart && cart.find((items)=>items.id===item.id);
    console.log(findcart)
    if(findcart){
        alert('Item is already in cart')
    }
   else{
    console.log(item.id)
    await axios.post("https://udemy-backend-server.onrender.com/udemy/addtocart",item)
    alert("Item has successfully added in your cart")

   }
}  
  return (
    <div className="searchContainer">
      
      
        (
          
            <div className="search_cardrow1">
                                    <div className="search_cardParent1">
                                        
                                        {data.map((item,index)=>{
                                        return(
                                            <div key={index} className="search_cardContainer2">
                                            
                                                <div className="search_singleCard1">
                                                        <div className="search_card1">
                                                            <img src={item.img} alt="not found"/> 
                                                        </div>
                                                        <div className="search_carddetails">
                                                            <p className="search_cardheading">
                                                                {item.heading}
                                                            </p>
                                                            <p className="search_cardname">
                                                                {item.name}
                                                            </p>
                                                            <p className="search_cardrating">
                                                                {item.rating}⭐⭐⭐⭐⭐
                                                                <span className="search_cardviewer">
                                                                    ({item.viewer})
                                                                </span>
                                                            </p>
                                                            <p className="search_cardprice">
                                                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                                                <b>{item.price}</b> &nbsp;&nbsp; 
                                                                <span className="search_cardpreviousPrice">
                                                                
                                                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                                                {item.previous_price}
                                                                </span>
                                                            </p>
                                                            <button className="search_addtocartbutton" onClick={()=>handleClick(item)}>
                                                                Add to cart
                                                            </button>
                
                                                        </div>

                                                </div>
                                            </div>    
                                            )
                                        })}
                                    </div> 
                                       
                </div>
        
        )
   

    </div>
    
  )
    

}

