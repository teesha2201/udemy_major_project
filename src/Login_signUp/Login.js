import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css"


function Login() {
    
  const [data, setData] = useState({
    email: "",
    password: "",
  });



  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4005/udemy/login", data)
    .then((res) => {
        alert(res.data.msg);
        setData(res.data);
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("name",res.data.name);
        localStorage.setItem("email",res.data.email);
        console.log(res.data)
        if(res.data.msg==="email wrong"){
          alert(res.data.msg)
          navigate('/login');
        }
        else if(res.data.msg==="password is wrong"){
          alert(res.data.msg)
          navigate('/login')
        }
        else{
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      setData({
        email: "",
        password: "",
      });
  };

  return (
    <div className="loginParent">
      <div className="logininner">
      <h3>Log in to your Udemy account</h3>
      <form className="loginForm" onSubmit={handleSubmit}>
       
      <br/>
   
        
        <label htmlFor="useremail">
       
        </label>
        <input className="text"
          type="email"
          name="email"
          id="useremail"
          onChange={handleChange}
          value={data.email}
          placeholder='Email'/>
        <br />
        <br />
        <label  htmlFor="password" >
        
        </label>
        <input
          className="text"
          type="password"
          maxLength="8"
          name="password"
          id="password"
          onChange={handleChange}
          value={data.password}
          placeholder=' Password'
        />
        <br />
        <br />
        <button className="Submitbutton" type="submit">
          Login
        </button>
        <br/>
        <div className="or">OR</div>
        <br/>
        <hr/>
        <div className="dont">
            Don't have an account?<NavLink to="/register" className="nextpage"> Signup </NavLink>
        <span className="nextpage">Log in with your organization</span>
        </div>
          
        <div>

        </div>
        
        <br/>
      </form>
      </div>
     
    </div>
  );
}

export default Login;

