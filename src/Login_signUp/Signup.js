import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Signup.css'

// const token = localStorage.getItem("token");

function Signup() {

  const navi = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    
    });
    
  const handleChange = (e) => {
    e.preventDefault();

    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async(e) => {
  
    e.preventDefault();
    console.log(data);
    if(data.name.length===0 ){
      
      alert("Name field must have max 24 characters long");
      navi('/register')
      }
      else if( data.email.length<=0 || data.email.length>30){
        alert("email field must have min 12 and max 30 characters long");
        navi('/register');

        if(data.password.length<=0 || data.password.length>12){
          alert("password field must have min 6 and max 12 characters long");
          navi('/register')


        }
      }
    else if(data.email.length===0 || data.email.length>30){
      alert("Name field must have max 24 characters long");
      navi('/register')

      if(data.password.length<=0 || data.password.length>12){
        alert("password field must have min 6 and max 12 characters long");
        navi('/register')

      

      }
    }
    else if(data.password.length<=0 || data.password.length>12){
      alert("password field must have min 6 and max 12 characters long");
      navi('/register')
       
     
    }
   
   
    await axios
        .post("https://udemy-backend-server.onrender.com/udemy/register", data )
        .then((res) => {
          alert(res.data.msg);
          setData(res.data);
          localStorage.setItem("token", res.data.token);
          console.log(res.data.token)
          
          if(res.data.msg ==="user already registered with this email")
            {
                navi('/register')
            }
          else if(res.data.token){
            
            navi("/login");
          }
        
        })
    
      .catch((err) => console.log(err));

    setData({
      name: "",
      email: "",
      password: "",
    
    });
 
}

  return (
    <>
      <div className="registerParent">
        <div className="registerinner">
        <form className="registerForm" onSubmit={handleSubmit}>
        <br/>
        <h3 className="headingsignup">Sign up and start learning</h3>
        <br/>
        <label id="name" htmlFor="name"> </label>
        <input type="text"  name="name"  id="name" className="text2" onChange={handleChange}  value={data.name} placeholder="Full Name" required/>
        <br />
        <br />
        <label id="email" htmlFor="email"></label>
        <input type="email" name="email" id="email"   className="text2" onChange={handleChange} value={data.email}   placeholder="Email" required/>
        <br />
        <br />
        <label id="password" htmlFor="Password"></label>
        <input type="password" maxLength="8" name="password" id="Password"  className="text2" onChange={handleChange} value={data.password}   placeholder="Password"required/>
        <br />
        <br />
        
        <button className="Submitbutton" onClick={handleSubmit} >
          submit
        </button>
        <br/>
        <br/>
        
        <hr/>
        <br/>
        <br/>
        <div className="or">Already have an account? <Link to="/login" className="nextpage">
          Go To Login Page
        </Link>
        </div>
        
        <br/>
        </form>
        </div>
      </div>
      
    </>
  );
}

export default Signup;



