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
const  Nav=()=> { 

  return (
    <>
        <div className="Nav_Container">
          <div className="imgdiv">
          <NavLink to="">
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
                  <div className="sub_container_two">
                     {/* Route:Development */}
                    <li className="developement">
                     <NavLink to="/development">
                            Development
                      </NavLink>
                      <ul className="development_subroute">
                        <div className="under_div">
                          <li className="web_development_container">
                           <NavLink to="/develop/webdevelopment" className="nav">Web Development</NavLink>
                            <div className="web_development_cover">
                              <ul className="web_development_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Java script</li>
                                <li>React js</li>
                                <li>Angular</li>
                                <li>Css</li>
                              </ul>
                            </div>
                          </li>
                          <li className="data_science_container">
                          <NavLink to="/develop/datascience" className="nav">Data Science</NavLink>
                            <div className="data_science_cover">
                              <ul className="data_science_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Python</li>
                                <li>Machine Learning</li>
                                <li>Deep Learning</li>
                                <li>Artificial Intelligence</li>
                              </ul>
                            </div>
                          </li>
                          <li className="mobile_development_container">
                          <NavLink to="/develop/mobiledevelopment" className="nav">Mobile Development</NavLink> 
                            <div className="mobile_development_cover">
                              <ul className="mobile_development_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Google Flutter </li>
                                <li>iOS Development </li>
                                <li>Android Development</li>
                                <li>React Native</li>
                              </ul>
                            </div>
                          </li>
                          <li className="programing_development_container">
                            Programing Languages
                            <div className="programing_development_cover">
                              <ul className="programing_development_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Python</li>
                                <li>Java </li>
                                <li>C#(Programming Language)</li>
                                <li>C++(Programming Language)</li>
                              </ul>
                            </div>
                          </li>
                          <li className="game_development_container">
                            Game Development
                            <div className="game_development_cover">
                              <ul className="game_development_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Unreal Engine</li>
                                <li>Unity</li>
                                <li>Game Development Fundamentalas</li>
                                <li>C++(Programming Language)</li>
                              </ul>
                            </div>
                          </li>
                          <li className="database_development_container">
                            Data Base Design & Development
                            <div className="database_development_cover">
                              <ul className="database_development_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>SQL </li>
                                <li> My SQL</li>
                                <li>Database Management</li>
                                <li>SQL Server</li>
                              </ul>
                            </div>
                          </li>
                          <li className="software_development_container">
                            Software Testing
                            <div className="software_development_cover">
                              <ul className="software_development_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Selenium webDriver </li>
                                <li>Automation Testing</li>
                                <li>Java</li>
                                <li>PostMan</li>
                              </ul>
                            </div>
                          </li>
                          <li className="engeering_development_container">
                            Software Engeering
                            <div className="engeering_development_cover">
                              <ul className="engeering_development_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Data Strucutre </li>
                                <li>Algorithms </li>
                                <li>Codng Interview</li>
                                <li>Software Architecture</li>
                              </ul>
                            </div>
                          </li>
                          <li className="tools_development_container">
                            Software Development Tools
                            <div className="tools_development_cover">
                              <ul className="tools_development_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Docker </li>
                                <li>Git </li>
                                <li>Kubernetes</li>
                                <li>JIRA</li>
                              </ul>
                            </div>
                          </li>
                          <li className="nocode_development_container">
                            No Code Development
                            <div className="nocode_development_cover">
                              <ul className="nocode_development_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Word Press </li>
                                <li> Microsoft Power Platform</li>
                                <li>Bubble Visual Programing</li>
                                <li>Microsoft Power Apps</li>
                              </ul>
                            </div>
                          </li>
                        </div>
                      </ul>
                    </li>
                   
                  </div>
                    {/*Route: Bussiness */}
                  <div>
                    <li className="business">
                      Business
                      <ul className="business_subroute">
                        <div className="under_div_business">
                          <li className="entrepneurship_development_container">
                            Entrepneurship
                            <div className="entrepneurship_development_cover">
                              <ul className="entrepneurship_development_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Buniess Fundamentalas</li>
                                <li>Entrepneurship</li>
                                <li>Freelencing</li>
                                <li>Business Stetigy</li>
                              </ul>
                            </div>
                          </li>
                          <li className="  communication_science_container">
                            communication
                            <div className="communication_science_cover">
                              <ul className="  communication_science_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Python</li>
                                <li>communication skill</li>
                                <li>presentation skill</li>
                                <li>public speking</li>
                                <li>Writing</li>
                              </ul>
                            </div>
                          </li>
                          <li className="management_development_container">
                            Management
                            <div className="management_development_cover">
                              <ul className="menagement_development_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li> product Management</li>
                                <li>Leadership</li>
                                <li>Management Skill</li>
                                <li>ISO 90001</li>
                              </ul>
                            </div>
                          </li>
                          <li className="sales_container">
                            Sales
                            <div className="sales_cover">
                              <ul className="sales_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Sales Skill</li>
                                <li>B2B Sales</li>
                                <li>Linkedin </li>
                                <li>Customer Service</li>
                              </ul>
                            </div>
                          </li>
                          <li className="Stetegy_container">
                            Business Strategy
                            <div className="Stetegy_cover">
                              <ul className="Stetegy_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Management Consulting </li>
                                <li>ESG</li>
                                <li>TOGAF </li>
                                <li>The Open Group Certified</li>
                              </ul>
                            </div>
                          </li>
                          <li className="Oprations_container">
                            Oprations
                            <div className="Oprations_cover">
                              <ul className="Oprations_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Supply Chain</li>
                                <li>Logistics Management</li>
                                <li>Lean six sigma Black Belt </li>
                                <li>Virtual Asistent Skill</li>
                              </ul>
                            </div>
                          </li>
                          <li className="Project_container">
                            Project Management
                            <div className="Project_cover">
                              <ul className="Project_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>PMI</li>
                                <li>PMI PMBOK</li>
                                <li>
                                  PMI Certified Associated IN Project Management
                                </li>
                                <li>Scrum</li>
                              </ul>
                            </div>
                          </li>
                          <li className="Law_container">
                            Business Law
                            <div className="law_cover">
                              <ul className="Law_subroutes">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Law </li>
                                <li>Contract Management</li>
                                <li>GDPR</li>
                                <li>Data Protection</li>
                              </ul>
                            </div>
                          </li>
                        </div>
                      </ul>
                    </li>
                  </div>
                  {/*  Finance & Accounting */}
                  <div>
                    <li className="finance">
                      Finance & Accounting
                      <ul className="subroute_finance">
                        <div className="finance_under_div">
                          <li className=" Accounting_finance_container">
                            Accounting & Book Keeping
                            <div className="Accounting_finance_cover">
                              <ul className=" Accounting_finance_subroute">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Accounting</li>
                                <li>Book Keeping</li>
                                <li>Financial Accounting</li>
                                <li>Finance Fundamentalas</li>
                              </ul>
                            </div>
                          </li>
                          
                          <li className="Compliance_container">
                            Compliance
                            <div className="Compliance_cover">
                              <ul className="Compliance_subroute">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Anti MOney Lendering</li>
                                <li>Criminology</li>
                                <li>Internal Control</li>
                                <li>Fraud Analytic</li>
                              </ul>
                            </div>
                          </li>
                          <li className=" Cryptocurrency_container">
                            Cryptocurrency & BlockChain
                            <div className="Cryptocurrency_cover">
                              <ul className=" Cryptocurrency_subroute">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Cryptocurrency</li>
                                <li>BlockChain</li>
                                <li>Bitcoin</li>
                                <li>Binance</li>
                              </ul>
                            </div>
                          </li>
                          <li className="Economics_container">
                            Economics
                            <div className="Economics_cover">
                              <ul className="Economics_subroute">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Macroeconomics</li>
                                <li>Microeconomics</li>
                                <li>Globaleconomics</li>
                                <li>Finance Fundamentalas</li>
                              </ul>
                            </div>
                          </li>
                          <li className="Finance_container">
                            Finance
                            <div className="Finance_cover">
                              <ul className="Finance_subroute">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Personal Finance</li>
                                <li>Finance Fundamentalas</li>
                                <li>Invesment Banking</li>
                                <li>Stock Trading</li>
                              </ul>
                            </div>
                          </li>
                          <li className=" Cert_container">
                            Finance Cert & Exam Prep
                            <div className="Cert_cert">
                              <ul className="Cert_subroute">
                                <span>
                                  <b>popular topics</b>
                                </span>
                                <li>Chartered Financial Analyst(CFA) </li>
                                <li>Certified Internal Auditor(CIA)</li>
                                <li>ANBIMA Certification </li>
                                <li>Certified Management ACcountant(CMA)</li>
                                <li>ACCA</li>
                              </ul>
                            </div>
                          </li>
                        </div>
                      </ul>
                    </li>
                  </div>
                {/* Route: It & Software */}
                  <li className="it_software">
                    It & Software
                    <ul className="subroute_It">
                      <div className="It_under_div">
                        <li className=" Certification_container">
                          It Certification
                          <div className="Certification_cover">
                            <ul className=" Certification_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>AWS Certified Cloud Practitionar</li>
                              <li>
                                AWS Certified Solution Architect_Associate
                              </li>
                              <li>CompTIA A++</li>
                              <li>Amazon AWS</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Network_container">
                          Network & Security
                          <div className="Network_cover">
                            <ul className="Network_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Athical Hanking</li>
                              <li>Cybersecurity</li>
                              <li>Network Security</li>
                              <li>Penetration Testing</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Hardware_container">
                          Hardware
                          <div className="Hardware_cover">
                            <ul className="Hardware_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>PLC</li>
                              <li>Arduino</li>
                              <li>Micro Controller</li>
                              <li>Embedded System</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Operating_container">
                          Operating System & Server
                          <div className="Operating_cover">
                            <ul className="Operating_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Linux</li>
                              <li>Linux Adminitration</li>
                              <li>Windows Server</li>
                              <li>Active Directry</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Otherit_container">
                          Other It & Software
                          <div className="Otherit_cover">
                            <ul className="Otherit_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Chatgpt</li>
                              <li>DevOps</li>
                              <li>Python</li>
                              <li>Kubernetes</li>
                            </ul>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </li>
                  {/* Route:Office Productivity */}
                  <li className="Office_Productivity">
                    Office Productivity
                    <ul className="subroute_Office">
                      <div className="Office_under_div">
                        <li className="Microsoft_container">
                          Microsoft
                          <div className="Microsoft_cover">
                            <ul className="Microsoft_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Excel</li>
                              <li>Microsoft 365</li>
                              <li>Excel VBA</li>
                              <li>Microsoft Power BI</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Apple_container">
                          Apple
                          <div className="Apple_cover">
                            <ul className="Apple_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>MAC Basics</li>
                              <li>I MOvie</li>
                              <li>AppleKeyNote</li>
                              <li>MAC OS</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Google_container">
                          Google
                          <div className="Google_cover">
                            <ul className="Google_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Googel Sheets</li>
                              <li>Googel work space</li>
                              <li>Googel looker studio</li>
                              <li>Googel App Sheet</li>
                            </ul>
                          </div>
                        </li>
                        <li className="sap_container">
                          SAP
                          <div className="sap_cover">
                            <ul className="sap_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>SAP S-4HALA</li>
                              <li>SAP ABAP</li>
                              <li>SAP MM</li>
                              <li>SAP SD</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Oracle_container">
                          Oracle
                          <div className="Oracle_cover">
                            <ul className="Oracle_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Oracle primavera</li>
                              <li>Oracle SQL</li>
                              <li>PL-SQL</li>
                              <li>Oracle fusion HCM</li>
                            </ul>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </li>
                {/* Route:Personal Development  */}
                  <li className="Personal_Development">
                    Personal Development
                    <ul className="subroute_Personal">
                      <div className="Personal_under_div">
                        <li className=" Relationship_container">
                          Parenting & Relationship
                          <div className=" Relationship_cover">
                            <ul className=" Relationship_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Parenting</li>
                              <li>Relationship Building</li>
                              <li>Child Psychology</li>
                              <li>Couples Conseling</li>
                            </ul>
                          </div>
                        </li>
                        <li className="TransfOrmation_container">
                          Personal Transformation
                          <div className="TransfOrmation_cover">
                            <ul className="TransfOrmation_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Life Coach Training</li>
                              <li>Neuro_Linguistic Programming</li>
                              <li>Personal Development</li>
                              <li>Sound Therapy</li>
                            </ul>
                          </div>
                        </li>
                        <li className="product_container">
                          Personal Productivity
                          <div className="product_cover">
                            <ul className="product_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Chat GPT</li>
                              <li>Time Management</li>
                              <li>Notion work space</li>
                              <li>oraganizational Skill</li>
                            </ul>
                          </div>
                        </li>
                        <li className="leader_container">
                          Leadership
                          <div className="leader_cover">
                            <ul className="leader_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Management Skills</li>
                              <li>Manager Training</li>
                              <li>Coaching</li>
                              <li>Communication Skil</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Carrier_container">
                          Carrier Development
                          <div className="Carrier_cover">
                            <ul className="Carrier_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Interviewing Skills</li>
                              <li>Job Search</li>
                              <li>Business communication</li>
                              <li>Buniess Writing</li>
                            </ul>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </li>
                 {/* Route:Design  */}
                  <li className="Design">
                    Design
                    <ul className="subroute_Design">
                      <div className="Design_under_div">
                        <li className=" Webdesign_container">
                          Web Design
                          <div className=" Webdesign_cover">
                            <ul className=" Webdesign_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Mobile app design</li>
                              <li>Word Press</li>
                              <li>CSS</li>
                              <li>Figma</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Illustration_container">
                          Graphic Design & Illustration
                          <div className="Illustration_cover">
                            <ul className="Illustration_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Graphic design</li>
                              <li>Adobe illustrator</li>
                              <li>Adobe Photoshop</li>
                              <li>Canva</li>
                            </ul>
                          </div>
                        </li>
                        <li className="tooldesign_container">
                          Design Tools
                          <div className="tooldesign_cover">
                            <ul className="tooldesign_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Auto Cad</li>
                              <li>Mid Jouney</li>
                              <li>Adobe Photoshop</li>
                              <li>SOLID WORKS</li>
                            </ul>
                          </div>
                        </li>
                        <li className=" User_container">
                          User Experince Design
                          <div className=" User_cover">
                            <ul className=" User_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Figma</li>
                              <li>User Interface Design</li>
                              <li>Adobe XD</li>
                              <li>UX Writing</li>
                            </ul>
                          </div>
                        </li>
                        <li className="gamedeign_container">
                          Game Design
                          <div className="gamedeign_cover">
                            <ul className="gamedeign_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Pixcel Art</li>
                              <li>Unreal Engine</li>
                              <li>Unity</li>
                              <li>VFX visual Effect</li>
                            </ul>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </li>
                 {/* Route: Marketing */}
                  <li className="Marketing">
                    Marketing
                    <ul className="subroute_Marketing">
                      <div className="Marketing_under_div">
                        <li className="Digital_container">
                          Digital Marketing
                          <div className="Digital_cover">
                            <ul className="Digital_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Chat GPT</li>
                              <li>Social Media Marketing</li>
                              <li>Marketing Stetegy</li>
                              <li>Hub spot</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Illustration_container">
                          Search Enginr Optimization
                          <div className="Illustration_cover">
                            <ul className="Illustration_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Search Engine Optimazation</li>
                              <li>Word Press</li>
                              <li>Keyword Research</li>
                              <li>Googel My Business</li>
                            </ul>
                          </div>
                        </li>
                        <li className="tooldesign_container">
                          Social Media Marketing
                          <div className="tooldesign_cover">
                            <ul className="tooldesign_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Instragram Marketing</li>
                              <li>Facebook Ads</li>
                              <li>Social Media Management</li>
                              <li>Facebook Marketing</li>
                            </ul>
                          </div>
                        </li>
                        <li className=" User_container">
                          Branding
                          <div className=" User_cover">
                            <ul className=" User_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Business Branding</li>
                              <li>You Tube Audience Growth</li>
                              <li>Personal Branding</li>
                              <li>You Tube Marketing</li>
                            </ul>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </li>
                     {/* Route: Lifestyle  */}
                  <li className="LifeStyle">
                    LifeStyle
                    <ul className="subroute_LifeStyle">
                      <div className="LifeStyle_under_div">
                        <li className="Arts_container">
                          Arts Crafts
                          <div className="Arts_cover">
                            <ul className="Arts_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Drawing</li>
                              <li>Water Color & Panting</li>
                              <li>Panting</li>
                              <li>Figure Drawing</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Makeup_container">
                          Beauty & Makeup
                          <div className="Makeup_cover">
                            <ul className="Makeup_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Makeup Artistry</li>
                              <li>Beauty</li>
                              <li>Skin Care</li>
                              <li>Nail Artistry</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Esoteric_container">
                          Esoteric Practices
                          <div className="Esoteric_cover">
                            <ul className="Esoteric_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Reike</li>
                              <li>Energy Healing</li>
                              <li>Tarot Reading</li>
                              <li>Hypnotheraphy</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Bevrage_container">
                          Food & Bevrage
                          <div className="Bevrage_cover">
                            <ul className="Bevrage_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Cooking</li>
                              <li>Cocktails & Bartending</li>
                              <li>Coffee</li>
                              <li>Pastry</li>
                            </ul>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </li>
                  {/* Route:Photography & Video */}
                  <li className="Video">
                    Photography & Video
                
                    <ul className="subroute_Video">
                      <div className="Video_under_div">
                        <li className="Digital_container">
                          Digital Photography
                          <div className="Digital_cover">
                            <ul className="Digital_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>I Phone Photography</li>
                              <li>Photography</li>
                              <li>Digital Camera functionality</li>
                              <li>Mobile Photography</li>
                            </ul>
                          </div>
                        </li>
                        <li className=" Photographysecond_container">
                          Photography
                          <div className="Photographysecond_cover">
                            <ul className="Photographysecond_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Photography Compogition</li>
                              <li>Digital Photography</li>
                              <li>Food Photography</li>
                              <li>product Photography</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Portrait_container">
                          Portrait Photography
                          <div className="Portrait_cover">
                            <ul className="Portrait_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Posing</li>
                              <li>Photography Lighting</li>
                              <li>Photoshop Retouching</li>
                              <li>Photography</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Toolsphoto_container">
                          Photography Tools
                          <div className="Toolsphoto_cover">
                            <ul className="Toolsphoto_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Adobe Light Room</li>
                              <li>Adobe photoshop</li>
                              <li>Image Editing</li>
                              <li>Digital Camera functionality</li>
                            </ul>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </li>
                  {/* Route:Health & Fitness  */}
                  <li className="Fitness">
                    Health & Fitness
                     
                    <ul className="subroute_Fitness">
                      <div className="Fitness_under_div">
                        <li className="Fitness_container">
                          Fitness
                          <div className="Fitness_cover">
                            <ul className="Fitness_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Pilats</li>
                              <li>Teacher Training</li>
                              <li>Persnal Trainer Business</li>
                              <li>Musscle Building</li>
                            </ul>
                          </div>
                        </li>
                        <li className=" General_container">
                          General Health
                          <div className="General_cover">
                            <ul className="General_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Massage</li>
                              <li>Herbalism</li>
                              <li>Holistic Medicine</li>
                              <li>Facial Massage</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Sports_container">
                          Sports
                          <div className=" Sports_cover">
                            <ul className=" Sports_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Soccer</li>
                              <li>Sport Psychology</li>
                              <li>Swimming</li>
                              <li>Sport Massage</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Diet_container">
                          Nutrition & Diet
                          <div className="Diet_cover">
                            <ul className="Diet_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Nutrition</li>
                              <li>Dieting </li>
                              <li>Weight-loss </li>
                              <li>Health Coach Training </li>
                            </ul>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </li>
                  {/* Route: Music */}
                  <li className="music">
                       
                    Music
                    <ul className="subroute_music">
                      <div className="music_under_div">
                        <li className="Instrument_container">
                          Instruments
                          <div className="Instrument_cover">
                            <ul className="Instrument_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Guitar</li>
                              <li>Piano </li>
                              <li>Keyword Instrument</li>
                              <li>Baas Guitar</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Production_container">
                          Music Production
                          <div className="Production_cover">
                            <ul className="Production_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>FL Studio</li>
                              <li>Logic Pro</li>
                              <li>Ableton Live </li>
                              <li>Music Mixing</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Musicfunda_container">
                          Music Fundamentalas
                          <div className=" Musicfunda_cover">
                            <ul className=" Musicfunda_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Music Theory</li>
                              <li>Music Compogition </li>
                              <li>Song Writing</li>
                              <li>Electronic Music</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Vocal_container">
                          Vocal
                          <div className="Vocal_cover">
                            <ul className="Vocal_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Singing</li>
                              <li>Voice Training </li>
                              <li>Voice Acting </li>
                              <li> Raga Music </li>
                            </ul>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </li>
                  {/* Teaching &  Academics*/}
                  <li className="Teaching">
                    Teaching & Academics
                    
                    <ul className="subroute_Teaching">
                      <div className="Teaching_under_div">
                        <li className="Engneering_container">
                          Engneering
                          <div className="Engneering_cover">
                            <ul className="Engneering_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Electric Engeering</li>
                              <li>Civil Engeering </li>
                              <li>Solar Energy </li>
                              <li> Electronics</li>
                            </ul>
                          </div>
                        </li>
                        <li className="Humanities_container">
                          Humanities
                          <div className="Humanities_cover">
                            <ul className="Humanities_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Philosophy</li>
                              <li>Christinity</li>
                              <li>Art History </li>
                              <li>Statics </li>
                            </ul>
                          </div>
                        </li>
                        <li className="Math_container">
                          Math
                          <div className="Math_cover">
                            <ul className="Math_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Calculus</li>
                              <li>Statistics </li>
                              <li>Algebra</li>
                              <li>Linear Algebra </li>
                            </ul>
                          </div>
                        </li>
                        <li className="Science_container">
                          Science
                          <div className="Science_cover">
                            <ul className="Science_subroute">
                              <span>
                                <b>popular topics</b>
                              </span>
                              <li>Physics</li>
                              <li>Orthodontics </li>
                              <li>Drug Safpty </li>
                              <li>Chemistry </li>
                            </ul>
                          </div>
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
          ></input>
          <div className="tooltip">
            <ul className="teachonudemy">
              Teach on Udemy
              <li className="tooltiptext">
                Turn What You Know into an opportunity and reach millions
                around the world
                <button className="tech_button">Learn More</button>
              </li>
              
            </ul>
          </div>

          <div className="iconParent">
                <span>
                <NavLink to="" className="addtoCart">
                    <i class="fa-solid fa-cart-shopping"></i>
                </NavLink>
                </span>
                <NavLink to="/login">
                    <button className="loginbtn">Log in</button>
                </NavLink>
                {/* <button className="loginbtn">Log in</button> */}
                <NavLink to="/register">
                    <button className="signupbtn">Sign up</button>
                </NavLink>
                
          </div>
        
        </div>
        <Routes>
          <Route path="/" element={<HomeContainer />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Signup />}/>
          
          <Route path="/developroute" element={<DevelopmentRoute/>}/>
          <Route path="/development" element={<Development/>}/>
          <Route path="/develop/webdevelopment" element={<WebDevelop/>}/>
          <Route path="/develop/datascience" element={<DataScience/>}/>
          <Route path="/develop/mobiledevelopment" element={<MobileDevelopment/>}/>
        </Routes> 
       
      
    </>
  );
}
export default Nav;


