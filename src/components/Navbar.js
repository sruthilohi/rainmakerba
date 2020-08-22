import React , {Component} from 'react'
// import {FaAlignRight, FaRegWindowClose} from 'react-icons/fa'
// import {Link} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import '../App.css'


// import {MenuItems, SubMenuServices} from './MenuItems'

export default class Navbar extends Component {
    state = {
        isOpen : false,
        
    }

    handleToggle = () => {
        // this.setState ({isOpen : !this.state.isOpen })
        this.setState((prevState) =>{
           return {isOpen : !this.state.isOpen }
        })
    }
   
    render(){
        return(
            <nav id="navbar" className="NavbarItems" >
               
                 <Link to="/" className="navbar-logo"><p className="logopart1">Rainmaker</p>
                 <p className="logopart2">Business Analytics</p>
                </Link>
                
                    <div className="menu-icon"  onClick={this.handleToggle}>
                          <i className={this.state.isOpen ? "fa fa-times":
                        "fa fa-bars"} id="bars"></i>
                        
                    </div> 
                   
                    
                     {/* <button type="button" className="nav-btn" 
                      onClick={this.handleToggle}>
                          <i className={this.state.isOpen ? < FaAlignRight className="nav-icon" />:
                        < FaAlignRight className="nav-icon" />}></i>
                        //  < FaAlignRight className="nav-icon" />
                      </button>  */}
                       {/* {MenuItems.map((item, index) => {
                           return(
                            <li key={index}>
                                <Link to={item.url} className={item.cName}>{item.title}</Link>
                               
                                    if({item.title}==="Services"){
                                    <ul>
                                            {SubMenuServices.map((item, index) =>{
                                                return(
                                                    <li key={index}>
                                                    <Link to={item.url} className={item.cName}>{item.title}</Link>
                                                    </li>
                                                )
                                            })}
                                     </ul>        
                                    }

                                   


                            </li>

                           )
                       })} */}
                    
                  
                   <ul className={this.state.isOpen?"nav-menu active":"nav-menu"}>
                   <li>
                        <Link to="/" className="nav-links" >Home</Link>
                   </li> 
                   <li>
                        <Link to="#" className="nav-links">Services</Link>
                        <ul>
                                <li className="submenu-links">
                                    {/* <Link to="/services" className="nav-links">Understanding Customer Sentiments</Link> */}
                                    {/* <a href="https://www.rainmakerba.com/services#content1" className="nav-links" >Understanding Customer Sentiments</a> */}
                                    <Link to="/services" className="nav-links">Understanding Customer Sentiments</Link> 
                                </li> 
                                            
                                <li  className="submenu-links">
                                    
                                    {/* <Link to="/services" className="nav-links">Finding Customer segments</Link> */}
                                    {/* <a href="https://www.rainmakerba.com/services#content2" className="nav-links" >Understanding Customer Sentiments</a> */}
                                    <Link to="/services#content1" className="nav-links">Finding Customer segments</Link> 
                                </li>  
                                <li className="submenu-links">

                                {/* <Link to="/services" className="nav-links">Targeting Most Valuable Customers</Link>  */}
                                {/* <a href="https://www.rainmakerba.com/services#content3" className="nav-links" >Understanding Customer Sentiments</a> */}
                                <Link to="/services#content3" className="nav-links">Targeting Most Valuable Customers</Link> 

                                </li>      
                                <li className="submenu-links">
  
                                {/* <Link to="/services" className="nav-links">Improving Customer Support</Link>         */}
                                {/* <a href="https://www.rainmakerba.com/services#content4" className="nav-links" >Understanding Customer Sentiments</a> */}
                                <Link to="/services#content4" className="nav-links">Improving Customer Support</Link> 
                                </li>              
                                <li className="submenu-links">
 
                                {/* <Link to="/services" className="nav-links">Churn Management</Link>         */}
                                {/* <a href="https://www.rainmakerba.com/services#content5" className="nav-links" >Understanding Customer Sentiments</a> */}
                                <Link to="/services#content5" className="nav-links">Churn Management</Link> 
                              
                                </li>  
                                <li className="submenu-links">
                               
                                {/* <Link to="/services" className="nav-links">Price Elasticity of Brands</Link>               */}
                                {/* <a href="https://www.rainmakerba.com/services#content6" className="nav-links" >Understanding Customer Sentiments</a> */}
                                <Link to="/services#content6" className="nav-links">Price Elasticity of Brands</Link> 
                                </li> 
                                            
                                <li className="submenu-links">
                               
                                {/* <Link to="/services" className="nav-links">Market Basket Analysis</Link>        */}
                                {/* <a href="https://www.rainmakerba.com/services#content7" className="nav-links" >Understanding Customer Sentiments</a> */}
                                <Link to="/services#content7" className="nav-links">Market Basket Analysis</Link> 
                                </li>              
                                <li className="submenu-links">
                               
                                {/* <Link to="/services" className="nav-links">Inventory Management</Link>  */}
                                {/* <a href="https://www.rainmakerba.com/services#content8" className="nav-links" >Understanding Customer Sentiments</a>   */}
                                <Link to="/services#content8" className="nav-links">Inventory Management</Link> 
                                </li>  
                                <li className="submenu-links">
                          
                                {/* <Link to="/services" className="nav-links">Medical Diagnosis & Risk Prediction</Link>  */}
                                {/* <a href="https://www.rainmakerba.com/services#content9" className="nav-links" >>Medical Diagnosis & Risk Prediction</a> */}
                                <Link to="/services#content9" className="nav-links">Medical Diagnosis & Risk Prediction</Link> 
   
                                </li>
                                <li className="submenu-links">
                                {/*                 
                                // <Link to="/services" className="nav-links">Time Series Analysis</Link>  */}
                                {/* <a href="https://www.rainmakerba.com/services#content10" className="nav-links" >Time Series Analysis</a>       */}
                                <Link to="/services#content10" className="nav-links">Time Series Analysis</Link> 
                                </li> 
                                <li className="submenu-links">
                               
                                {/* <Link to="/services" className="nav-links">Fraud Detection</Link>  */}
                                {/* <a href="https://www.rainmakerba.com/services#content11" className="nav-links" >Understanding Customer Sentiments</a> */}
                                <Link to="/services#content11" className="nav-links">Fraud Detection</Link> 
                                       
                                </li> 
                                                        
                        </ul>
                        </li>
                        <li>
                        <Link to="#" className="nav-links">Solutions</Link>
                        <ul>
                                <li className="submenu-links">
                                      <Link to="/establishanalytics" className="nav-links">Establish a business analytics program </Link>
                                </li>              
                                <li  className="submenu-links">
                                    <Link to="/reporting" className="nav-links" >Reporting to improve CEO/Executive decisions </Link>
                                </li>  
                                <li className="submenu-links">
                                    <Link to="/training" className="nav-links" >Train Client employees in analytics</Link>
                                </li>      
                                <li className="submenu-links">
                                    <Link to="/secondment" className="nav-links">Secondment of analytics personal</Link>
                                </li>              
                                <li className="submenu-links">
                                    <Link to="/datacapture" className="nav-links">Smart data capture for an analytics program</Link>
                                </li>  
                                                                                       
                        </ul>
                        </li>
                        <li>
                        <Link to="#" className="nav-links">Insights</Link>
                        <ul>
                                <li className="submenu-links">
                               
                                {/* <Link to="/Insights" className="nav-links" >Success stories</Link> */}
                                <Link to="/Insights" className="nav-links">Success stories</Link> 
                                </li>              
                                <li  className="submenu-links">
                               
                                {/* <Link to="/Insights" className="nav-links" >Trending topics</Link>  */}
                                <Link to="/Insights#trendingtopics" className="nav-links">Trending topics</Link> 
                                </li>  
                                <li className="submenu-links">
                               
                                {/* <Link to="/Insights" className="nav-links" >Featured articles</Link> */}
                                <Link to="/Insights#featuredarticles" className="nav-links">Featured articles</Link> 
                                </li>      
                               
                                                                                       
                        </ul>
                        </li>
                        <li>
                        <Link to="/ContactUs" className="nav-links">Contact Us</Link>
                        </li>    

                            
                   </ul>
                    
               

            </nav>
        )
    }
}      