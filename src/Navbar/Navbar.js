import React from "react";
import {BrowserRouter, NavLink} from "react-router-dom";
import Routing from "./Routing"
import WebDevelop from "../development/WebDevelop";
// import "./NavStyle/Navbar.css"
import HomeContainer from "../Home_compo/HomeContainer";
const Navbar = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routing/>
               
                <div className="Nav_Container">
                        <img  src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Not found" className="udemyLogo"/>
              
                {/* categorise route,subroute,subroute's subroute */}

               <div className="categories_parent">
                    <ul className="navbarParent">
                        <li className="categories">
                            <div className="categories_div">
                                Categories
                            </div>
                            <ul className="categories_subRoute">
                                <div className="sub_container_two">
                                {/* Route:Development */}
                                <li className="development">Development
                               
                                    <ul className="Development_subroute">
                                        <div className="development_subroute_div">
                                            {/* Route: web development */}
                                            <li className="web_development">
                                                <div className="web_development_div">
                                                <NavLink to="/webdevelopment" element={<WebDevelop/> } className="navcolor">Web Development</NavLink>
                                                </div>
                                                <ul className="web_development_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>javaScript</li>
                                                    <li>React Js</li>
                                                    <li>Angular</li>
                                                    <li>Css</li>
                                                    <li>Node.js</li>
                                                </ul>
                                            </li>
                                            <li className="data_science">
                                                <div className="data_science_div">
                                                    <NavLink to="" element className="navcolor">Data Science</NavLink>
                                                </div>
                                                <ul className="data_science_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Python</li>
                                                    <li>Machine Learning</li>
                                                    <li>Deep Learning</li>
                                                    <li>Artifical Intelligence</li>
                                                </ul>
                                            </li>
                                            <li className="mobile_development">
                                                <div className="mobile_development_div">
                                                    <NavLink to="" element className="navcolor"> Mobile Development</NavLink>
                                                </div>
                                                <ul className="mobile_development_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Google Flutter</li>
                                                    <li>iOS Development</li>
                                                    <li>Andriod Development</li>
                                                    <li>React Native</li>
                                                </ul>
                                            </li>
                                            <li className="Programming_Languages">
                                                <div className="Programming_Languages_div">
                                                    <NavLink to="" element className="navcolor">  Programming Languages</NavLink>
                                                </div>
                                                <ul className="Programming_Languages_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Python </li>
                                                    <li>Java</li>
                                                    <li>C#(Programming Languages)</li>
                                                    <li>C++(Programming Languages)</li>
                                                </ul>
                                            </li>
                                            <li className="Game_Development">
                                                <div className="Game_Development_div">
                                                    <NavLink to="" element className="navcolor">Game Development</NavLink>
                                                </div>
                                                <ul className="Game_Development_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Unreal Engine</li>
                                                    <li>Unity </li>
                                                    <li>Game Developmet Fundamentals</li>
                                                    <li>C++ (Programming languages)</li>
                                                </ul>
                                            </li>
                                            <li className="Database_Design_develop">
                                                <div className="Database_Design_develop_div">
                                                        <NavLink to="" element className="navcolor">Database Design & Development</NavLink>
                                                </div>
                                                 <ul className="Database_Design_develop_subroute">
                                                        <li className="popular_topics">Popular topics</li>
                                                        <li>SQL</li>
                                                        <li>MySQL </li>
                                                        <li>Database Management</li>
                                                        <li>SQL Server</li>
                                                </ul>      
                                            </li>
                                            <li className="software_testing">
                                                <div className="software_testing_div">
                                                    <NavLink to="" element className="navcolor">Software Testing</NavLink>
                                                </div>
                                                <ul className="software_testing_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Selenium webDriver</li>
                                                    <li>Automation Testing </li>
                                                    <li>Java</li>
                                                    <li>Postman</li>
                                                </ul>    
                                            </li>
                                            <li className="software_engineering">
                                                <div className="software_engineering_div">
                                                    <NavLink to="" element className="navcolor">Software Engineering</NavLink>
                                                </div>
                                                <ul className="software_engineering_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Data Structure</li>
                                                    <li>Algorithm </li>
                                                    <li>Coding Interview </li>
                                                    <li>Software Architecture</li>
                                                </ul>  
                                                
                                            </li>
                                            <li className="software_dev_tools">
                                                <div className="software_dev_tools_div">
                                                    <NavLink to="" element className="navcolor">Software Development Tools</NavLink>
                                                </div>
                                                <ul className="software_dev_tools_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Docker</li>
                                                    <li>Git </li>
                                                    <li>Kubernetes </li>
                                                    <li>JIRA</li>
                                                </ul>  
                                                
                                            </li>
                                            <li className="no-code_develop">
                                                <div className="no-code_develop_div">
                                                    <NavLink to="" element className="navcolor">No-Code Development</NavLink>
                                                </div>
                                                <ul className="no-code_develop_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>WordPress</li>
                                                    <li>Micro Power Platform </li>
                                                    <li>Bubble Visual Programming  </li>
                                                    <li>Microsoft Power Apps</li>
                                                </ul>
                                            </li>
                                        </div>
                                        
                                    </ul>
                              

                                </li>
                                </div>
                                {/*Route: Bussiness */}
                                <div>
                                <li className="bussiness">Bussiness
                                    <ul className="bussiness_subroute">
                                        <div className="bussiness_subroute_div">
                                            <li className="enterpreneurship">
                                                <div className="enterpreneurship_div">
                                                    <NavLink to="" element className="navcolor">Enterpreneurship</NavLink>
                                                </div>
                                                <ul className="enterpreneurship_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Business Fundamentals</li>
                                                    <li>Enterpreneurship Fundamentals</li>
                                                    <li>Freelancing</li>
                                                    <li>Business Strategy</li>
                                                    <li>ChatGpt</li>
                                                </ul>
                                            </li>
                                             <li className="communication">
                                                <div className="communication_div">
                                                    <NavLink to="" element className="navcolor">Communication</NavLink>
                                                </div>
                                                <ul className="communication_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Communication Skills</li>
                                                    <li>Presentation Skills</li>
                                                    <li>Public Speaking</li>
                                                    <li>Writing</li>
                                                    <li>Fiction Writing</li>
                                                </ul>
                                            </li>
                                         
                                            <li className="management">
                                                <div className="management_div">
                                                    <NavLink to="" element className="navcolor">Management</NavLink>
                                                </div>
                                                <ul className="management_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Product Management</li>
                                                    <li>Leadership</li>
                                                    <li>Management Skills</li>
                                                    <li>ISO 9001</li>
                                                    <li>Project Management</li>
                                                </ul>
                                            </li>
                                            <li className="sales">
                                                <div className="sales_div">
                                                    <NavLink to="" element className="navcolor">Sales</NavLink>
                                                </div>
                                                <ul className="sales_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Sales Skills</li>
                                                    <li>B2B Sales</li>
                                                    <li>Linkedln</li>
                                                    <li>Customer Service</li>
                                                    <li>Lead Generation</li>
                                                </ul>
                                            </li>
                                            <li className="business_strategy">
                                                <div className="business_strategy_div">
                                                    <NavLink to="" element className="navcolor">Business Strategy</NavLink>
                                                </div>
                                                <ul className="bussiness_strategy_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Management Consulting</li>
                                                    <li>ESG (Environmental,Social and Governance)</li>
                                                    <li>TOGAF</li>
                                                    <li>The OPen Group Certified: TOGAF Enterprise Architecture Foundation</li>
                                                    <li>Digital Transformation</li>
                                                </ul>
                                            </li>
                                            <li className="operations">
                                                <div className="operations_div">
                                                    <NavLink to="" element className="navcolor">Operations</NavLink>
                                                </div>
                                                <ul className="operations_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Supply Chain</li>
                                                    <li>Logistics Management</li>
                                                    <li>Lean Six Sigma Black Belt</li>
                                                    <li>Virtual Assistant Skills</li>
                                                    <li>Lean</li>
                                                </ul>
                                            </li>
                                            <li className="project_management">
                                                <div className="project_management_div">
                                                    <NavLink to="" element className="navcolor">Project Management</NavLink>
                                                </div>
                                                <ul className="project_management_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>PMI Project Management Professional(PMP)</li>
                                                    <li>PMI PMBOK</li>
                                                    <li>PMI Certified Associate in Project Management(CAPM)</li>
                                                    <li>Scrum</li>
                                                    <li>Agile</li>
                                                </ul>
                                            </li>
                                            <li className="business_law">
                                                <div className="business_law_div">
                                                    <NavLink to="" element className="navcolor">Bussiness Law</NavLink>
                                                </div>
                                                <ul className="business_law_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Law</li>
                                                    <li>Contract Management</li>
                                                    <li>GDPR</li>
                                                    <li>Data Protection</li>
                                                    <li>Contract Law</li>
                                                </ul>
                                            </li>
                                            <li className="buss_analy_intel">
                                                <div className="buss_analy_intel_div">
                                                    <NavLink to="" element className="navcolor">Business Analytics & Intelligence</NavLink>
                                                </div>
                                                <ul className="buss_analy_intel_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Microsoft Power BI</li>
                                                    <li>SQL</li>
                                                    <li>Data Modeling</li>
                                                    <li>Data Analysis</li>
                                                    <li>Business Analysis</li>
                                                </ul>
                                            </li>
                                            <li className="human_resources">
                                                <div className="human_resources_div">
                                                    <NavLink to="" element className="navcolor">Human Resources</NavLink>
                                                </div>
                                                <ul className="human_resources_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Recruiting</li>
                                                    <li>HR Analytics</li>
                                                    <li>Employment Law</li>
                                                    <li>Corporate Learning and Development(L&D)</li>
                                                    <li>Hiring</li>
                                                </ul>
                                            </li>
                                            <li className="industry">
                                                <div className="industry_div">
                                                    <NavLink to="" element className="navcolor">industry</NavLink>
                                                </div>
                                                <ul className="industry_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Piping</li>
                                                    <li>Oil and Gas Industry</li>
                                                    <li>Chemical Engineering</li>
                                                    <li>Workplace Health and Safety</li>
                                                    <li>Control Engineering</li>
                                                </ul>
                                            </li>
                                            <li className="ecommerce">
                                                <div className="ecommerce_div">
                                                    <NavLink to="" element className="navcolor">E-commerce</NavLink>
                                                </div>
                                                <ul className="ecommerce_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Amazon FBA</li>
                                                    <li>Dropshipping</li>
                                                    <li>Shopify Dropshipping</li>
                                                    <li>Shopify</li>
                                                    <li>Esty</li>
                                                </ul>
                                            </li>
                                            <li className="media">
                                                <div className="media_div">
                                                    <NavLink to="" element className="navcolor">Media</NavLink>
                                                </div>
                                                <ul className="media_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Content Creation</li>
                                                    <li>Audiobook creation</li>
                                                    <li>Amazon Kindle Direct Publishing</li>
                                                    <li>Journalism</li>
                                                    <li>Generative AI</li>
                                                </ul>
                                            </li>
                                            <li className="real_estate">
                                                <div className="real_estate_div">
                                                    <NavLink to="" element className="navcolor">Real Estate</NavLink>
                                                </div>
                                                <ul className="real_estate_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Real Estate Investing</li>
                                                    <li>Airbnb Hosting</li>
                                                    <li>Financial Modeling</li>
                                                    <li>Construction</li>
                                                    <li>Real Estate Marketing</li>
                                                </ul>
                                            </li>
                                            <li className="other_bussiness">
                                                <div className="other_bussiness_div">
                                                    <NavLink to="" element className="navcolor">Other  Bussiness</NavLink>
                                                </div>
                                                <ul className="other_bussiness_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>QuickBooks Online</li>
                                                    <li>Grant Writing</li>
                                                    <li>ChatGPT</li>
                                                    <li>Data Entry Skills</li>
                                                    <li>Transcription</li>
                                                </ul>
                                            </li> 
                                        </div>
                                    </ul>        
                                </li>
                                </div>
                                {/*  Finance & Accounting */}
                                <div>
                                <li className="finance_accounting">Finance & Accounting
                                    <ul className="finance_accounting_subroute">
                                        <div className="finance_accounting_subroute_div">
                                            <li className="accounting_bookkeeping">
                                                <div className="accounting_bookkeeping_div">
                                                    <NavLink to="" element className="navcolor">Accounting Bookkeeping</NavLink>
                                                </div>
                                                {/* balam :Accounting_finance_cover*/}
                                                <div className="Accounting_finance_cover">
                                                <ul className="accounting_bookkeeping_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Accounting</li>
                                                    <li>Bookkeeping</li>
                                                    <li>Financial Accounting</li>
                                                    <li>Finance Fundamentals</li>
                                                    <li>QuickBooks Online</li>
                                                </ul>
                                                </div>
                                            </li>
                                             <li className="compliance">
                                                <div className="compliance_div">
                                                    <NavLink to="" element className="navcolor">Compliance</NavLink>
                                                </div>
                                                {/* balam */}
                                                <div className="Compliance_cover">
                                                <ul className="compliance_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Anti-Money Laundering</li>
                                                    <li>Criminology</li>
                                                    <li>Internal Controls</li>
                                                    <li>Fraud Analytics </li>
                                                    <li>IFRS</li>
                                                </ul>
                                                </div>
                                            </li>
                                            
                                            <li className="cryptocurrency_blockchain">
                                                <div className="_div">
                                                    <NavLink to="" element className="navcolor">Cryptocurrency Blockchain</NavLink>
                                                </div>
                                                <div className="Cryptocurrency_cover">
                                                <ul className="cryptocurrency_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Cryptocurrency</li>
                                                    <li>Blockchain</li>
                                                    <li>Bitcoin</li>
                                                    <li>Binance</li>
                                                    <li>NFT(Non-Fungible Tokens)</li>
                                                </ul>
                                                </div>
                                            </li>
                                              
                                            <li className="economics">
                                                <div className="economics_div">
                                                    <NavLink to="" element className="navcolor">Economics</NavLink>
                                                </div>
                                                <div className="Economics_cover">
                                                <ul className="economics_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Macroeconomics</li>
                                                    <li>Microeconomics</li>
                                                    <li>Global Economics</li>
                                                    <li>Finance Fundamentals</li>
                                                    <li>Stata</li>
                                                </ul>
                                                </div>
                                            </li>

                                            <li className="finance">
                                                <div className="finance_div">
                                                    <NavLink to="" element className="navcolor">Finance</NavLink>
                                                </div>
                                                <div className="Finance_cover">
                                                <ul className="finance_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Personal Finance</li>
                                                    <li>Finance Fundamentals</li>
                                                    <li>Investment Banking</li>
                                                    <li>Stock Trading</li>
                                                    <li>Corporate Finance</li>
                                                </ul>
                                                </div>
                                            </li>
                                            <li className="finance_cert_examprep">
                                                <div className="finance_cert_examprep_div">
                                                    <NavLink to="" element className="navcolor">Finance Cert & Exam Prep</NavLink>
                                                </div>
                                                <div className="Cert_cert">
                                                <ul className="finance_cert_examprep_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Chartered Financial Analyst(CFA) </li>
                                                    <li>Certified Internal Auditor(CIA)</li>
                                                    <li>ANBIMA Certification </li>
                                                    <li>Certified Management ACcountant(CMA)</li>
                                                    <li>ACCA</li>
                                                </ul>
                                                </div>
                                            </li>
                                            {/*  
                                            <li className="financial_modeling_analysis">
                                                <div className="financial_modeling_analysis_div">
                                                    <NavLink to="" element className="navcolor">Financial Modeling & Analysis</NavLink>
                                                </div>
                                                <ul className="financial_modeling_analysis_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Financial Analysis</li>
                                                    <li>Financial Modeling</li>
                                                    <li>Excel</li>
                                                    <li>Investment Banking</li>
                                                    <li>Finance Fundamentals</li>
                                                </ul>
                                            </li>
                                            <li className="investing_trading">
                                                <div className="investing_trading_div">
                                                    <NavLink to="" element className="navcolor">Investing & Trading</NavLink>
                                                </div>
                                                <ul className="investing_trading_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Stock Trading</li>
                                                    <li>Investing</li>
                                                    <li>Forex Trading</li>
                                                    <li>Technical Analysis</li>
                                                    <li>Algorithm Trading</li>
                                                </ul>
                                            </li>
                                            <li className="money_manage_tools">
                                                <div className="money_manage_tools_div">
                                                    <NavLink to="" element className="navcolor">Money Management Tools</NavLink>
                                                </div>
                                                <ul className="money_manage_tools_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>QuickBooks Online</li>
                                                    <li>QuickBooks</li>
                                                    <li>SAP FICO</li>
                                                    <li>Xero</li>
                                                    <li>EXcel</li>
                                                </ul>
                                            </li>
                                            <li className="taxes">
                                                <div className="taxes_div">
                                                    <NavLink to="" element className="navcolor">Taxes</NavLink>
                                                </div>
                                                <ul className="texes_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Tex Preparation</li>
                                                    <li>Goods and Services Tax</li>
                                                    <li>Accounting</li>
                                                    <li>Value Added Tax(VAT)</li>
                                                    <li>Transfer Pricing</li>
                                                </ul>
                                            </li>
                                            <li className="other_finance_acc">
                                                <div className="other_finance_acc_div">
                                                    <NavLink to="" element className="navcolor">Other Finance & Accounting</NavLink>
                                                </div>
                                                <ul className="other_finance_acc_subroute">
                                                    <li className="popular_topics">Popular topics</li>
                                                    <li>Accounting</li>
                                                    <li>Personal Finance</li>
                                                    <li>Financial Planning</li>
                                                    <li>Certified Internal Auditor</li>
                                                    <li>Insurance</li>
                                                </ul>
                                            </li> */}

      
                                        </div>
                                    </ul>       
                                </li>
                                </div>

                                <li className="it_software">
                    It & Software
                    <ul className="subroute_It">
                      <div className="It_under_div">
                        <li className=" Certification_container">
                          It Certification
                          <div className="Certification_cover">
                            <ul className=" Certification_subroute">
                              <span>
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                  
                  <li className="Office_Productivity">
                    Office Productivity
                    <ul className="subroute_Office">
                      <div className="Office_under_div">
                        <li className="Microsoft_container">
                          Microsoft
                          <div className="Microsoft_cover">
                            <ul className="Microsoft_subroute">
                              <span>
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
           
                  <li className="Personal_Development">
                    Personal Development
                    <ul className="subroute_Personal">
                      <div className="Personal_under_div">
                        <li className=" Relationship_container">
                          Parenting & Relationship
                          <div className=" Relationship_cover">
                            <ul className=" Relationship_subroute">
                              <span>
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                        
                  <li className="Design">
                    Design
                    <ul className="subroute_Design">
                      <div className="Design_under_div">
                        <li className=" Webdesign_container">
                          Web Design
                          <div className=" Webdesign_cover">
                            <ul className=" Webdesign_subroute">
                              <span>
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                 
                  <li className="Marketing">
                    Marketing
                    <ul className="subroute_Marketing">
                      <div className="Marketing_under_div">
                        <li className="Digital_container">
                          Digital Marketing
                          <div className="Digital_cover">
                            <ul className="Digital_subroute">
                              <span>
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                     
                  <li className="LifeStyle">
                    LifeStyle
                    <ul className="subroute_LifeStyle">
                      <div className="LifeStyle_under_div">
                        <li className="Arts_container">
                          Arts Crafts
                          <div className="Arts_cover">
                            <ul className="Arts_subroute">
                              <span>
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                  <li className="Video">
                    Photography & Video
                
                    <ul className="subroute_Video">
                      <div className="Video_under_div">
                        <li className="Digital_container">
                          Digital Photography
                          <div className="Digital_cover">
                            <ul className="Digital_subroute">
                              <span>
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                  <li className="Fitness">
                    Health & Fitness
                     
                    <ul className="subroute_Fitness">
                      <div className="Fitness_under_div">
                        <li className="Fitness_container">
                          Fitness
                          <div className="Fitness_cover">
                            <ul className="Fitness_subroute">
                              <span>
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                  <li className="music">
                       
                    Music
                    <ul className="subroute_music">
                      <div className="music_under_div">
                        <li className="Instrument_container">
                          Instruments
                          <div className="Instrument_cover">
                            <ul className="Instrument_subroute">
                              <span>
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                  <li className="Teaching">
                    Teaching & Academics
                    
                    <ul className="subroute_Teaching">
                      <div className="Teaching_under_div">
                        <li className="Engneering_container">
                          Engneering
                          <div className="Engneering_cover">
                            <ul className="Engneering_subroute">
                              <span>
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
                                <b>Text popular topics</b>
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
               
                {/* Bussiness */}
             
                    
                </div> 




                    {/* nav Search bar here  */}
                    <span>
                        <input placeholder="search for anything"  className="searchbar"/>
                    </span> 
                    <span><NavLink to="/techonudemy" className="techOnUdemy">Tech on Udemy</NavLink></span>
                    
                    <ul className="iconParent">

                        <li>
                            <NavLink to="" className="addtoCart">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </NavLink>
                        </li>
                        <li>
                            <button className="loginbtn">Log in</button>
                        </li>
                        <li>
                            <button className="signupbtn">Sign up</button>
                        </li>   
                    </ul>
                </div>                                                 

             
                  
                
                  
                  
                       
                  
                   
                 
      
            </BrowserRouter>
            
        </>
    )
}
export default Navbar












{/* <div className="categories">Categories

</div>
<ul className="categories_subRoute">
    <li className="development">Development
        <ul className="Development_subroute">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </li>
    <li>Bussiness</li>
    <li>finance & Accounting</li>
    <li>IT & software</li>
    <li>Office Productivity</li>
    <li>Personal Development</li>
    <li>Design</li>
    <li>Marketing</li>
    <li>Lifestyle</li>
    <li>photography & Video</li>
    <li>Health & Fitness</li>
    <li>Music</li>
    <li>Teaching & Academics</li>
</ul> */}