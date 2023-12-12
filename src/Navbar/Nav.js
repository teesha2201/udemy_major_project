import {  NavLink, Route, Routes} from "react-router-dom";
import "./Nav.css";
import HomeContainer from "../Home_compo/HomeContainer";
import Signup from "../Login_signUp/Signup";
import Login from "../Login_signUp/Login";
import WebDevelop from "../development/WebDevelop";
import DevelopmentRoute from "../development/DevelopmentRoute";
import Development from "../development/Development";
import DataScience from "../development/DataScience";
import MobileDevelopment from "../development/MobileDevelopment"
import BussinessRoute from "../Bussiness/BussinessRoute";
import Bussiness from "../Bussiness/Bussiness";
import Communication from "../Bussiness/Communication";
import Management from "../Bussiness/Management";
import BussinessStrategy from "../Bussiness/BussinessStrategy";
import Operations from "../Bussiness/Operations";
import HumanResources from "../Bussiness/HumanResources";
import FinanceRoute from "../Finance/FinanceRoute";
import FinanceAcc from "../Finance/FinanceAcc";
import Accountingandbook from "../Finance/Accountingandbook";
import Compliance from "../Finance/Compliance";
import Economic from "../Finance/Economic";
import Taxes from "../Finance/Taxes";
import Finance from "../Finance/Finance";
import ITandsoftwareRoute from "../ITandSoftware/IT&softwareRoute";
import ITsoftware from "../ITandSoftware/IT&software";
import Certification from "../ITandSoftware/Certification";
import Network from "../ITandSoftware/Network";
import Hardware from "../ITandSoftware/Hardware";
import Operating from "../ITandSoftware/Operating";
import OtherSoftware from "../ITandSoftware/OtherSoftware";
import DesignRoute from "../Design/DesignRoute";
import Design from "../Design/Design";
import WebDesign from "../Design/WebDesign";
import FashionDesign from "../Design/FashionDesign";
import Animation from "../Design/Animation";
import OtherDesign from "../Design/OtherDesign";
import GameDesign from "../Design/GameDesign";
import MarketingRoute from "../Marketing/MarketRoute";
import DigitalMarketing from "../Marketing/Digitalmarketing";
import ContentMarketing from "../Marketing/ContentMarketing";
import SocialMarketing from "../Marketing/SocialMarketing";
import ProductMarketing from "../Marketing/Productmarketing";
import PublicMarketing from "../Marketing/PublicMarketing";
import Market from "../Marketing/Market";
import LifestyleRoute from "../LifeStyle/LifestyleRoute";
import Lifestyle from "../LifeStyle/Lifestyle";
import ArtCraft from "../LifeStyle/ArtsCraft";
import Beauty from "../LifeStyle/Beauty";
import Travel from "../LifeStyle/Travel";
import Food from "../LifeStyle/food";
import PetCare from "../LifeStyle/Petcare";
import PhotographyRoute from "../Photograohy/PhotographyRoute";
import PhotographyVideo from "../Photograohy/PhotographyVideo";
import Photography from "../Photograohy/Photography";
import DigitalPhotography from "../Photograohy/DigitalPhotography";
import CommercialPhotography from "../Photograohy/Commercial";
import PhotographyTools from "../Photograohy/Tools";
import VideoDesign from "../Photograohy/VideoDesign";
import HealthRoute from "../Health/HealthRoute";
import Fitness from "../Health/Fitness";
import Health from "../Health/Health";
import MentalHealth from "../Health/MentalHealth";
import Sports from "../Health/Sports";
import Yoga from "../Health/Yoga";
import Dance from "../Health/Dance";
import MusicRoute from "../Music/MusicRoute";
import Music from "../Music/Music";
import Instruments from "../Music/Instruments";
import MusicProduction from "../Music/MusicProduction";
import MusicSoftware from "../Music/MusicSoftware";
import Vocal from "../Music/Vocal";
import MusicTech from "../Music/MusicTech";
import TeachingRoute from "../Teaching/TeachingRoute";
import Teaching from "../Teaching/Teaching";
import Engineering from "../Teaching/Engineering";
import SocialScience from "../Teaching/SocialScience";
import Math from "../Teaching/Math";
import Science from "../Teaching/Science";
import TeacherTraining from "../Teaching/TeacherTraining";
import Teachonudemy from  "../TechOnUdemy";
import TechOnUdemy from "../TechOnUdemy";
import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Search from '../Search/Search';

import PrivateComponent from "./PrivateComponent";
import LearnerCart from "../Cart/LearnerCart";
import AddtoCart from "../Cart/AddtoCart";


const  Nav=()=> { 

  const auth = localStorage.getItem('token')
  const username = localStorage.getItem('name')
  const email = localStorage.getItem('email')
  const [count, setCount] = useState(false);

  // console.log(auth,username,email)
  const navi = useNavigate();
  const logout = ()=>{
    console.log("Logout")
    localStorage.clear(auth);
    
    navi('/register');
  }


  const [searchData,setSearchData]=useState()
  const handleSearch= (e)=>{
    setSearchData(e.target.value)

  }
  console.log(searchData)
  const [search, setSearch] = useState("");



    useEffect(()=>{
      axios.get(`http://localhost:4005/udemy/search?page=${searchData}`)
      .then((response) =>setSearch(response.data))
      .catch((error) => {console.error("Error fetching search results:", error);});
    },[searchData])
    // console.log(search)
    const searchres =()=>{
      console.log(search)
      navi("/search",{state:search})
    }
   
    // const [toggle ,settoggle] = useState(false);
 

  return (
    <>
       
        <div className="Nav_Container">
        <div onClick={() => setCount(!count)} className="display">
            <i className={`fa-solid ${count ? 'fa-close' : 'fa-bars humbergermenu'}`}></i>
            
        </div>

          <div className="imgdiv">
          <NavLink to="/">
            <img
              className="udemyLogo"
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="Not Found" 

            />
          </NavLink>
          </div>

          <div className="categories_parent">
            <ul className="navbarParent">
              <li className="categories_list">
                <div className="categories_div">Categories</div>

                <ul className="categories_subRoute">
                  
                    {/*Route: Bussiness */}
                  <div>
                    <li className="business">
                      <NavLink to="/bussiness">
                        Bussiness
                      </NavLink>
                      <ul className="business_subroute">
                        <div className="under_div_business">
                        
                          <li className="communication_science_container">
                            <NavLink to="/bussiness/communication" className="nav">Communication</NavLink>
                       
                          </li>
                          <li className="management_development_container">
                            <NavLink to="/bussiness/management" className="nav">Management</NavLink>
                            
                       
                          </li>
                          
                          <li className="Stetegy_container">
                            <NavLink to="/bussiness/bussiness_strategy" className="nav">Bussiness Strategy</NavLink>
                         
                          </li>
                          <li className="Oprations_container">
                          <NavLink to="/bussiness/operation" className="nav">Operations</NavLink>
                     
                          </li>
                         
                          <li className="Law_container">
                          <NavLink to="/bussiness/human_resources" className="nav">Human Resources</NavLink>
                          </li>

                        </div>
                      </ul>
                    </li>
                  </div>
                  {/*  Finance & Accounting */}
                  <div>
                    <li className="finance">
                      <NavLink to="/finance&accounting">
                          Finance & Accounting
                      </NavLink> 
                      <ul className="subroute_finance">
                        <div className="finance_under_div">
                          <li className=" Accounting_finance_container">
                            <NavLink to="/finance&acc/accounting&bookkeeping" className="nav">Accounting & Book Keeping</NavLink>
                         
                          </li>
                          
                          <li className="Compliance_container">
                            <NavLink to="/finance&acc/compilance" className="nav">Compilance</NavLink> 
                          
                          </li>
                         
                          <li className="Economics_container">
                            <NavLink to="/finance&acc/economic" className="nav">Economic</NavLink>
                          </li>
                          <li className="Finance_container">
                            <NavLink to="/finance&acc/finance" className="nav">Finance</NavLink>
                           
                          </li>
                          <li className=" Cert_container">
                            <NavLink to="/finance&acc/taxes" className="nav">Taxes</NavLink>
                        
                          </li>
                        </div>
                      </ul>
                    </li>
                  </div>
                {/* Route: It & Software */}
                  <li className="it_software">
                    <NavLink to="/It&sofware">
                      IT & Software
                      </NavLink>
                    <ul className="subroute_It">
                      <div className="It_under_div">
                        <li className=" Certification_container">
                          <NavLink to="/It&sofware/ITcertification" className="nav">It Certification</NavLink>
                         
                        </li>
                        <li className="Network_container">
                          <NavLink to="/It&sofware/network&security" className="nav"> Network & Security</NavLink> 

                        </li>
                        <li className="Hardware_container">
                          <NavLink to="/It&sofware/hardware" className="nav">Hardware</NavLink>
                        
                        </li>
                        <li className="Operating_container">
                          <NavLink to="/It&sofware/operatingsystem&server" className="nav">Operating System & Server</NavLink>
                          
                        </li>
                        <li className="Otherit_container">
                          <NavLink to="/It&sofware/otherIt&software" className="nav">Other It & Software</NavLink>
                          
                        </li>
                      </div>
                    </ul>
                  </li>
                  
                 {/* Route:Design  */}
                  <li className="Design">
                  <NavLink to="/design">
                    Design
                    </NavLink>
                    <ul className="subroute_Design">
                      <div className="Design_under_div">
                        <li className=" Webdesign_container">
                        <NavLink to="/design/webdesign" className="nav">Web Design</NavLink>
                          
                        </li>
                        <li className="Illustration_container">
                        <NavLink to="/design/fashiondesign" className="nav">Fashion Design</NavLink> 
                        
                        </li>
                        <li className="tooldesign_container">
                        <NavLink to="/design/3d&animation" className="nav">3D & Animation</NavLink>
                        </li>
                        <li className=" User_container">
                        <NavLink to="/design/gamedesign" className="nav">Game Design</NavLink>
                       
                        </li>
                        <li className="gamedeign_container">
                        <NavLink to="/design/otherdesign" className="nav">Other Design</NavLink>
                      
                        </li>
                       
                      </div>
                    </ul>
                  </li>
                 {/* Route: Marketing */}
                  <li className="Marketing">
                    <NavLink to="/marketing">
                      Marketing
                    </NavLink>
                    <ul className="subroute_Marketing">
                      <div className="Marketing_under_div">
                        <li className="Digital_container">
                        <NavLink to="/marketing/digitalmarketing" className="nav">Digital Marketing</NavLink>
                       
                        </li>
                        <li className="Illustration_container">
                        <NavLink to="/marketing/contentmarketing" className="nav">Content Marketing</NavLink> 
                        </li>
                        <li className="tooldesign_container">
                        <NavLink to="/marketing/socialmediamarketing" className="nav">Social Media Marketing</NavLink>
                         
                        </li>
                        <li className=" User_container">
                        <NavLink to="/marketing/productmarketing" className="nav">Product Marketing</NavLink>
                        </li>
                        <li>
                        <NavLink to="/marketing/publicmarketing" className="nav">Public Marketing</NavLink>
                        </li>
                      </div>
                    </ul>
                  </li>
                     {/* Route: Lifestyle  */}
                  <li className="LifeStyle">
                  <NavLink to="/lifestyle">
                    LifeStyle
                    </NavLink>
                    <ul className="subroute_LifeStyle">
                      <div className="LifeStyle_under_div">
                        <li className="Arts_container">
                        <NavLink to="/lifestyle/arts&crafts" className="nav">Arts & Crafts</NavLink>
                          
                        </li>
                        <li className="Makeup_container">
                        <NavLink to="/lifestyle/beauty&makeup" className="nav">Beauty & Makeup</NavLink>
                          
                        </li>
                        <li className="Esoteric_container">
                        <NavLink to="/lifestyle/travel" className="nav">Travel</NavLink>
                         
                        </li>
                        <li className="Bevrage_container">
                        <NavLink to="/lifestyle/food&beverage" className="nav"> Food & Beverage</NavLink>
                        
                        </li>
                        <li>
                        <NavLink to="/lifestyle/petcare&training" className="nav">Pet care & Training</NavLink>
                        </li>
                      </div>
                    </ul>
                  </li>
                  {/* Route:Photography & Video */}
                  <li className="Video">
                    <NavLink to="/photography">
                      Photography & Video
                    </NavLink> 
                
                    <ul className="subroute_Video">
                      <div className="Video_under_div">
                        <li className="Digital_container">
                        <NavLink to="/photography/digitalphotography" className="nav">Digital Photography</NavLink>

                        </li>
                        <li className=" Photographysecond_container">
                        <NavLink to="/photography/photo" className="nav">Photography</NavLink> 
                        </li>
                        <li className="Portrait_container">
                        <NavLink to="/photography/commericialphotography" className="nav">Commercial Photography</NavLink>
                        </li>
                        <li className="Toolsphoto_container">
                        <NavLink to="/photography/photographytools" className="nav">Photography Tools</NavLink>
                        </li>
                        <li className="">
                        <NavLink to="/photography/videodesign" className="nav">Video Design</NavLink>
                        </li>
                      </div>
                    </ul>
                  </li>
                  {/* Route:Health & Fitness  */}
                  <li className="Fitness">
                  <NavLink to="/health&fitness">
                        Health & Fitness
                    </NavLink>
                     
                    <ul className="subroute_Fitness">
                      <div className="Fitness_under_div">
                        <li className="Fitness_container">
                        <NavLink to="/health&fitness/fitness" className="nav">Fitness</NavLink>
                          
                        </li>
                        <li className=" General_container">
                        <NavLink to="/health&fitness/mentalhealth" className="nav">Mental Health</NavLink> 
                         
                        </li>
                        <li className="Sports_container">
                        <NavLink to="/health&fitness/sports" className="nav">Sports</NavLink>

                          
                        </li>
                        <li className="">
                        <NavLink to="/health&fitness/yoga" className="nav">Yoga</NavLink>

                        </li>
                        <li className="dance">
                        <NavLink to="/health&fitness/dance" className="nav">Dance</NavLink>

                        </li>
                      </div>
                    </ul>
                  </li>
                  {/* Route: Music */}
                  <li className="music">
                  <NavLink to="/music">
                        Music
                    </NavLink> 
                    <ul className="subroute_music">
                      <div className="music_under_div">
                        <li className="Instrument_container">
                        <NavLink to="/music/instruments" className="nav">Instruments</NavLink>
                        </li>
                        <li className="Production_container">
                        <NavLink to="/music/musicproduction" className="nav">Music Production</NavLink> 
                        </li>
                        <li className="Musicfunda_container">
                        <NavLink to="/music/musicsoftware" className="nav">Music Software</NavLink>
                        </li>
                        <li className="Vocal_container">
                        <NavLink to="/music/vocal" className="nav">Vocal</NavLink>
                        </li>
                        <li className="Musicfunda_container">
                        <NavLink to="/music/musictechniques" className="nav">Music Techniques</NavLink>
                        </li>
                       
                      </div>
                    </ul>
                  </li>
                  {/* Teaching &  Academics*/}
                  <li className="Teaching">
                  <NavLink to="/teaching">
                Teaching & Academics
                    </NavLink>
                    
                    <ul className="subroute_Teaching">
                      <div className="Teaching_under_div">
                        <li className="Engneering_container">
                        <NavLink to="/teaching/engineering" className="nav">Engneering </NavLink>
                        </li>
                        <li className="Humanities_container">
                        <NavLink to="/teaching/socialscience" className="nav">Social Science</NavLink> 
                        </li>
                        <li className="Math_container">
                        <NavLink to="/teaching/math" className="nav">  Math </NavLink>
                        </li>
                        <li className="Science_container">
                        <NavLink to="/teaching/science" className="nav">Science</NavLink>
                        </li>
                        <li>
                        <NavLink to="/teaching/teachertraining" className="nav">Teacher Training</NavLink>
                        </li>
                      </div>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <input 
              type="text"
              placeholder="search for anything"
              className="searchbar"
              onChange={handleSearch}
              
            ></input><button onClick={searchres}><i className="fa-solid fa-magnifying-glass search_res "></i></button>

          {/* responvive navbar */}

  




      {/* *************************************************************** */}
          {/* <div className="resicondiv">
          <div onClick={() => setCount(!count)} className="display">
            <i class="fa-solid fa-bars"></i>
          </div>
            <img
              className="udemyLogores"
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="Not Found" 

            />
            <i className="fa-solid fa-cart-shopping rescartcolor" onClick={()=>navi("/addtocart")}></i>
              
           
          </div> */}
            

          
          <div className="tooltip">
            <ul className="teachonudemy nav" >
                <NavLink to="/techonudemy" >Teach on Udemy</NavLink>
              <li className="tooltiptext">
                Turn What You Know into an opportunity and reach millions
                around the world
                <button className="tech_button">Learn More</button>
              </li>
              
            </ul>
          </div>
          <span  className="addtoCarticon" >
              <i className="fa-solid fa-cart-shopping cartcolor" onClick={()=>navi("/addtocart")}></i>
          </span>
          <span className="iconParent">                       
                {auth ?

                  <div className="learnerparent">
                     <div className="nameiconsdiv">
                        <p onClick={()=>navi("/learnercart")}>Learning Cart</p>
                        <p className="nameicon">{username.slice(0,1)}</p>
                        {/* <p className="nameicon">{username}</p> */}
                     </div>
                    
                      {/* scroll down :learners cart */}
                    <div className="dropdown">
                        <div className="innerdrop">
                          <p className="nameicon">
                           {username.slice(0,1)} 
                          </p>
                          <div className="emailnamediv">
                            <p >
                            {username} 
                            </p>
                            <p>
                            {email}
                            </p>
                          
                          </div>
                         
                        </div>
                        <p onClick={()=>navi("/learnercart")}>My Learning Cart </p>
                        <p onClick={()=>navi("/addtocart")}>AddtoCart</p>
                        <p onClick={logout}>Log out</p>       
                    </div>
                    
                      
                  </div>  
                : 
                <>
                  <NavLink to="/login">
                    <button className="loginbtn">Log in</button>
                  </NavLink>
          
                  <NavLink to="/register">
                    <button className="signupbtn">Sign up</button>
                  </NavLink>
                </>
                }
               
                
          </span>
        
        </div>
        <Routes>
          <Route path="/" element={<HomeContainer />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Signup />}/>
          <Route path="/techonudemy" element={<TechOnUdemy/>}/>
          
          <Route element={<PrivateComponent/>}>
          <Route path="/developroute" element={<DevelopmentRoute/>}/>
          <Route path="/development" element={<Development/>}/>
          <Route path="/develop/webdevelopment" element={<WebDevelop/>}/>
          <Route path="/develop/datascience" element={<DataScience/>}/>
          <Route path="/develop/mobiledevelopment" element={<MobileDevelopment/>}/>


          <Route path="/bussinessroute" element={<BussinessRoute/>}/>
          <Route path="/bussiness" element={<Bussiness/>}/>
          <Route path="/bussiness/communication" element={<Communication/>}/>
          <Route path="/bussiness/management" element={<Management/>}/>
          <Route path="/bussiness/bussiness_strategy" element={<BussinessStrategy/>}/>
          <Route path="/bussiness/operation" element={<Operations/>}/>
          <Route path="/bussiness/human_resources"  element={<HumanResources/>} />
        
          
          <Route path="/financeroute" element={<FinanceRoute/>}/>
          <Route path="/finance&accounting" element={<FinanceAcc/>}/>
          <Route path="/finance&acc/accounting&bookkeeping" element={<Accountingandbook/>}/>
          <Route path="/finance&acc/compilance"  element={<Compliance/>}/>
          <Route path="/finance&acc/economic" element={<Economic/>}/>
          <Route path="/finance&acc/taxes" element={<Taxes/>}/>
          <Route path="/finance&acc/finance" element={<Finance/>}/>
        
          <Route path="/IT&softwareroute" element={<ITandsoftwareRoute/>}/>
          <Route path="/It&sofware" element={<ITsoftware/>}/>
           <Route path="/It&sofware/ITcertification" element={<Certification/>}/>
           <Route path="/It&sofware/network&security" element={<Network/>}/>
           <Route path="/It&sofware/hardware" element={<Hardware/>}/>
          <Route path="/It&sofware/operatingsystem&server" element={<Operating/>}/>
          <Route path="/It&sofware/otherIt&software" element={<OtherSoftware/>}/>
        
          <Route path="/designroute" element={<DesignRoute/>}/>
          <Route path="/design" element={<Design/>}/>
          <Route path="/design/webdesign" element={<WebDesign/>}/>
          <Route path="/design/fashiondesign" element={<FashionDesign/>}/>
          <Route path="/design/3d&animation" element= {<Animation/>}/>
          <Route path="/design/otherdesign" element={<OtherDesign/>}/>
          <Route path="/design/gamedesign" element={<GameDesign/>}/>
        
          <Route path="/marketingroute" element={<MarketingRoute/>}/>
          <Route path="/marketing" element={<Market/>}/>
          <Route path="/marketing/digitalmarketing" element={<DigitalMarketing/>}/>
          <Route path="/marketing/contentmarketing" element={<ContentMarketing/>}/>
          <Route path="/marketing/socialmediamarketing" element={<SocialMarketing/>}/>
          <Route path="/marketing/productmarketing" element={<ProductMarketing/>}/>
          <Route path="/marketing/publicmarketing" element={<PublicMarketing/>}/>
          
          <Route path="/lifestyleroute" element={<LifestyleRoute/>}/>
          <Route path="/lifestyle" element={<Lifestyle/>}/>
          <Route path="/lifestyle/arts&crafts" element={<ArtCraft/>}/>
          <Route path="/lifestyle/beauty&makeup" element={<Beauty/>}/>
          <Route path="/lifestyle/travel" element={<Travel/>}/>
          <Route path="/lifestyle/food&beverage" element={<Food/>}/>
          <Route path="/lifestyle/petcare&training" element={<PetCare/>}/>
        
          <Route path="/photographyroute" element={<PhotographyRoute/>}/>
          <Route path="/photography" element={<PhotographyVideo/>}/>
          <Route path="/photography/digitalphotography"  element={<DigitalPhotography/>}/>
          <Route path="/photography/photo" element={<Photography/>}/>
          <Route path="/photography/commericialphotography" element={<CommercialPhotography/>}/>
          <Route path="/photography/photographytools" element={<PhotographyTools/>}/>
          <Route path="/photography/videodesign"  element={<VideoDesign/>}/>

          <Route path="/healthroute" element={<HealthRoute/>}/>
          <Route path="/health&fitness" element={<Health/>}/>
          <Route path="/health&fitness/fitness" element={<Fitness/>}/>
          <Route path="/health&fitness/mentalhealth" element={<MentalHealth/>}/>
          <Route path="/health&fitness/sports" element={<Sports/>}/>
          <Route path="/health&fitness/yoga" element={<Yoga/>}/>
          <Route path="/health&fitness/dance" element={<Dance/>}/>

          <Route path="/musicroute" element={<MusicRoute/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/music/instruments" element={<Instruments/>}/>
          <Route path="/music/musicproduction" element={<MusicProduction/>}/>
          <Route path="/music/musicsoftware" element={<MusicSoftware/>}/>
          <Route path="/music/vocal" element={<Vocal/>}/>
          <Route path="/music/musictechniques" element={<MusicTech/>}/>
          
          <Route path="/teachingroute" element={<TeachingRoute/>}/>
          <Route path="/teaching" element={<Teaching/>}/>
          <Route path="/teaching/engineering" element={<Engineering/>}/>
          <Route path="/teaching/socialscience" element={<SocialScience/>}/>
          <Route path="/teaching/math" element={<Math/>}/>
          <Route path="/teaching/science" element={<Science/>}/>
          <Route path="/teaching/teachertraining" element={<TeacherTraining/>}/>
          <Route path="/learnercart" element={<LearnerCart/>}/>
          </Route>

          <Route path="/teachonudemy" element={<Teachonudemy/>}/>
          <Route path="/search" element={<Search/>}></Route>
          
          
          <Route path="/addtocart" element={<AddtoCart/>}/>
        </Routes> 
          


          {/* hamberger: */}
          <div className={count ? 'hambergerlinksShows' : 'hambergerlinksHide'}>
              <ul className= "navbar-listResponsive">
                <li className='listres'>{auth ? 
             
                
              
                <NavLink onClick={() => {setCount(!count) ;logout()}} to="/register" className="navlinkRes" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>
                      Logout
                  </NavLink>:
                  <>
                  <NavLink  onClick={() => setCount(!count)} to="/login" className="navlinkRes" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>Login</NavLink> 
                  
                  <div>
                  <NavLink onClick={() => setCount(!count)} to="/register" className="navlinkRes" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>Sign Up</NavLink>
                  </div>
                  </>}
                </li>
                <li  className="mostpopular">
                 
                      Most Popular
                      {/* <span><i class="fa-solid fa-angle-left" onClick={()=>navi(-1)}></i></span> */}
                   
                    </li>
                <li className="business_res" >
                        <NavLink to="/bussiness">
                          Bussiness
                        </NavLink> 
                       <div className="bussiness_cover_res">
                       <ul className="business_subroute_res">
                          
                            
                            
                          <li className="bussiness_sub">
                            <NavLink to="/bussiness">
                              Bussiness
                            </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa-solid fa-angle-left" onClick={()=>navi(-1)}></i></span>
                          </li>
                          <li className="communication_science_container">
                            <NavLink to="/bussiness/communication" className="nav">Communication </NavLink>
                      
                          </li>
                          <li className="management_development_container">
                            <NavLink to="/bussiness/management" className="nav">Management</NavLink>
                            
                      
                          </li>
                          
                          <li className="Stetegy_container">
                            <NavLink to="/bussiness/bussiness_strategy" className="nav">Bussiness Strategy</NavLink>
                        
                          </li>
                          <li className="Oprations_container">
                          <NavLink to="/bussiness/operation" className="nav">Operations</NavLink>
                    
                          </li>
                        
                          <li className="Law_container">
                          <NavLink to="/bussiness/human_resources" className="nav">Human Resources</NavLink>
                          </li>

                       
                      </ul> 
                       </div>
                      </li>      
                    
                       <li className="finance_res">
                      <NavLink to="/finance&accounting">
                          Finance & Accounting
                      </NavLink> 
                     <div className="finance_cover_res">
                     <ul className="subroute_finance_res">
                      
                      <li>
                      <NavLink to="/finance&accounting">
                      Finance & Accounting
                      </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa-solid fa-angle-left" onClick={()=>navi(-1)}></i></span> 
                      </li>
                      <li className=" Accounting_finance_container">
                        <NavLink to="/finance&acc/accounting&bookkeeping" className="nav">Accounting & Book Keeping</NavLink>
                     
                      </li>
                      
                      <li className="Compliance_container">
                        <NavLink to="/finance&acc/compilance" className="nav">Compilance</NavLink> 
                      
                      </li>
                     
                      <li className="Economics_container">
                        <NavLink to="/finance&acc/economic" className="nav">Economic</NavLink>
                      </li>
                      <li className="Finance_container">
                        <NavLink to="/finance&acc/finance" className="nav">Finance</NavLink>
                       
                      </li>
                      <li className=" Cert_container">
                        <NavLink to="/finance&acc/taxes" className="nav">Taxes</NavLink>
                    
                      </li>
                   
                    </ul>
                     </div>
                    </li>
                    <li className="it_software_res">
                    <NavLink to="/It&sofware">
                      IT & Software
                      </NavLink>
                    <div className="it_cover_res">
                    <ul className="subroute_It_res">
                      <div className="It_under_div_res">
                        <li>
                          <NavLink to="/It&sofware">
                          IT & Software
                          </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa-solid fa-angle-left" onClick={()=>navi(-1)}></i></span>
                        </li>
                        <li className=" Certification_container">
                          <NavLink to="/It&sofware/ITcertification" className="nav">It Certification</NavLink>
                         
                        </li>
                        <li className="Network_container">
                          <NavLink to="/It&sofware/network&security" className="nav"> Network & Security</NavLink> 

                        </li>
                        <li className="Hardware_container">
                          <NavLink to="/It&sofware/hardware" className="nav">Hardware</NavLink>
                        
                        </li>
                        <li className="Operating_container">
                          <NavLink to="/It&sofware/operatingsystem&server" className="nav">Operating System & Server</NavLink>
                          
                        </li>
                        <li className="Otherit_container">
                          <NavLink to="/It&sofware/otherIt&software" className="nav">Other It & Software</NavLink>
                          
                        </li>
                      </div>
                    </ul>
                    </div>
                  </li>
                  <li className="Design_res">
                  <NavLink to="/design">
                    Design
                    </NavLink>
                    <div className="design_cover_res">
                    <ul className="subroute_Design_res">
                      <div className="Design_under_div_res">
                        <li>
                        <NavLink to="/design">
                          Design
                          </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa-solid fa-angle-left" onClick={()=>navi(-1)}></i></span>
                        </li>
                        <li className=" Webdesign_container">
                        <NavLink to="/design/webdesign" className="nav">Web Design</NavLink>
                          
                        </li>
                        <li className="Illustration_container">
                        <NavLink to="/design/fashiondesign" className="nav">Fashion Design</NavLink> 
                        
                        </li>
                        <li className="tooldesign_container">
                        <NavLink to="/design/3d&animation" className="nav">3D & Animation</NavLink>
                        </li>
                        <li className=" User_container">
                        <NavLink to="/design/gamedesign" className="nav">Game Design</NavLink>
                       
                        </li>
                        <li className="gamedeign_container">
                        <NavLink to="/design/otherdesign" className="nav">Other Design</NavLink>
                      
                        </li>
                       
                      </div>
                    </ul>
                    </div>
                  </li>
                  <li className="Marketing_res">
                    <NavLink to="/marketing">
                      Marketing
                    </NavLink>
                    <div className="Marketing_cover_res">
                    <ul className="subroute_Marketing_res">
                      <div className="Marketing_under_div_res">
                        <li>
                        <NavLink to="/marketing">
                          Marketing
                        </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa-solid fa-angle-left" onClick={()=>navi(-1)}></i></span>
                        </li>
                        <li className="Digital_container">
                        <NavLink to="/marketing/digitalmarketing" className="nav">Digital Marketing</NavLink>
                       
                        </li>
                        <li className="Illustration_container">
                        <NavLink to="/marketing/contentmarketing" className="nav">Content Marketing</NavLink> 
                        </li>
                        <li className="tooldesign_container">
                        <NavLink to="/marketing/socialmediamarketing" className="nav">Social Media Marketing</NavLink>
                         
                        </li>
                        <li className=" User_container">
                        <NavLink to="/marketing/productmarketing" className="nav">Product Marketing</NavLink>
                        </li>
                        <li>
                        <NavLink to="/marketing/publicmarketing" className="nav">Public Marketing</NavLink>
                        </li>
                      </div>
                    </ul>
                    </div>
                  </li>
                  {/* <li className="Fitness_res">
                  <NavLink to="/health&fitness">
                        Health & Fitness
                    </NavLink>
                    <div  className="Fitness_cover_res"> 
                    <ul className="subroute_Fitness_res">
                      <div className="Fitness_under_div_res">
                        <li>
                        <NavLink to="/health&fitness">
                        Health & Fitness
                      </NavLink>
                        </li>
                        <li className="Fitness_container">
                        <NavLink to="/health&fitness/fitness" className="nav">Fitness</NavLink>
                          
                        </li>
                        <li className=" General_container">
                        <NavLink to="/health&fitness/mentalhealth" className="nav">Mental Health</NavLink> 
                         
                        </li>
                        <li className="Sports_container">
                        <NavLink to="/health&fitness/sports" className="nav">Sports</NavLink>

                          
                        </li>
                        <li className="">
                        <NavLink to="/health&fitness/yoga" className="nav">Yoga</NavLink>

                        </li>
                        <li className="dance">
                        <NavLink to="/health&fitness/dance" className="nav">Dance</NavLink>

                        </li>
                      </div>
                    </ul>
                    </div> 
                  </li> */}
                  <li className="LifeStyle_res">
                  <NavLink to="/lifestyle">
                    LifeStyle
                    </NavLink>
                    <div className="LifeStyle_cover_res">
                    <ul className="subroute_LifeStyle_res">
                      <div className="LifeStyle_under_div_res">
                        <li>
                        <NavLink to="/lifestyle">
                          LifeStyle
                        </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa-solid fa-angle-left" onClick={()=>navi(-1)}></i></span>
                        </li>
                        <li className="Arts_container">
                        <NavLink to="/lifestyle/arts&crafts" className="nav">Arts & Crafts</NavLink>
                          
                        </li>
                        <li className="Makeup_container">
                        <NavLink to="/lifestyle/beauty&makeup" className="nav">Beauty & Makeup</NavLink>
                          
                        </li>
                        <li className="Esoteric_container">
                        <NavLink to="/lifestyle/travel" className="nav">Travel</NavLink>
                         
                        </li>
                        <li className="Bevrage_container">
                        <NavLink to="/lifestyle/food&beverage" className="nav"> Food & Beverage</NavLink>
                        
                        </li>
                        <li>
                        <NavLink to="/lifestyle/petcare&training" className="nav">Pet care & Training</NavLink>
                        </li>
                      </div>
                    </ul>
                    </div>
                  </li>
                  <li className="Video_res">
                    <NavLink to="/photography">
                      Photography & Video
                    </NavLink> 
                
                    <div className="Video_cover_res">
                    <ul className="subroute_Video_res">
                      <div className="Video_under_div_res">
                        <li>
                        <NavLink to="/photography">
                          Photography & Video
                        </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa-solid fa-angle-left" onClick={()=>navi(-1)}></i></span> 
                        </li>
                        <li className="Digital_container">
                        <NavLink to="/photography/digitalphotography" className="nav">Digital Photography</NavLink>

                        </li>
                        <li className=" Photographysecond_container">
                        <NavLink to="/photography/photo" className="nav">Photography</NavLink> 
                        </li>
                        <li className="Portrait_container">
                        <NavLink to="/photography/commericialphotography" className="nav">Commercial Photography</NavLink>
                        </li>
                        <li className="Toolsphoto_container">
                        <NavLink to="/photography/photographytools" className="nav">Photography Tools</NavLink>
                        </li>
                        <li className="">
                        <NavLink to="/photography/videodesign" className="nav">Video Design</NavLink>
                        </li>
                      </div>
                    </ul>
                    </div>
                  </li>

                  <li className="music_res">
                  <NavLink to="/music">
                        Music
                    </NavLink> 
                    <div className="music_cover_res">
                    <ul className="subroute_music_res">
                      <div className="music_under_div_res">
                        <li>
                        <NavLink to="/music">
                            Music
                        </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa-solid fa-angle-left" onClick={()=>navi(-1)}></i></span> 
                        </li>
                        <li className="Instrument_container">
                        <NavLink to="/music/instruments" className="nav">Instruments</NavLink>
                        </li>
                        <li className="Production_container">
                        <NavLink to="/music/musicproduction" className="nav">Music Production</NavLink> 
                        </li>
                        <li className="Musicfunda_container">
                        <NavLink to="/music/musicsoftware" className="nav">Music Software</NavLink>
                        </li>
                        <li className="Vocal_container">
                        <NavLink to="/music/vocal" className="nav">Vocal</NavLink>
                        </li>
                        <li className="Musicfunda_container">
                        <NavLink to="/music/musictechniques" className="nav">Music Techniques</NavLink>
                        </li>
                       
                      </div>
                    </ul>
                    </div>
                  </li> 
                  <li className="Teaching_res">
                  <NavLink to="/teaching">
                Teaching & Academics
                    </NavLink>
                    <div className="Teaching_cover_res">
                    <ul className="subroute_Teaching_res">
                      <div className="Teaching_under_div_res">
                        <li>
                        <NavLink to="/teaching">
                Teaching & Academics
                    </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa-solid fa-angle-left" onClick={()=>navi(-1)}></i></span>
                        </li>
                        <li className="Engneering_container">
                        <NavLink to="/teaching/engineering" className="nav">Engneering </NavLink>
                        </li>
                        <li className="Humanities_container">
                        <NavLink to="/teaching/socialscience" className="nav">Social Science</NavLink> 
                        </li>
                        <li className="Math_container">
                        <NavLink to="/teaching/math" className="nav">  Math </NavLink>
                        </li>
                        <li className="Science_container">
                        <NavLink to="/teaching/science" className="nav">Science</NavLink>
                        </li>
                        <li>
                        <NavLink to="/teaching/teachertraining" className="nav">Teacher Training</NavLink>
                        </li>
                      </div>
                    </ul>
                    </div>
                   
                  </li> 
                  <li onClick={()=>navi('/learnercart')} style={{color:"Navy" ,   borderBottom: "2px solid lightgray"}} className="learn_res">
                    My Learning Cart
                  </li>
                  <li onClick={()=>navi('/teachonudemy')} style={{color:"Navy" , borderBottom:"2px solid lightgray"}} className="learn_res">
                    Tech on Udemy
                  </li>
              </ul>
        </div>     
                   
       
    </>
  );
}
export default Nav;


