import React ,{Component} from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
// ,faAngleUp
import '../Styles/cookie.css'

export default class Home extends Component {
    state = {
        isOpen : true,
        
    }

    handleToggle = () => {
        
        this.setState((prevState) =>{
           return {isOpen : !this.state.isOpen }
        })
        localStorage.setItem("cookiealertdisplayed",'true')
       
    }
    componentDidMount() {
        setTimeout(() => {
        if(!localStorage.getItem("cookiealertdisplayed")){
            document.querySelector('.cookiewrapper').classList.add("active")
            // this.setState({
            //     isOpen : false
            //  })
        }
        
    },2000)
    }
    componentWillUnmount() {
        clearTimeout();
      }
   
    render(){
             
             
        return(
            <div className="homepage" id="homepagetop" >
                <div className="banner">
                        <div className=" bannerimage">
                        <img alt="banner"  src="assets\homepage.jpg" 
                         className="header-image" 
                                /> 
                        </div>              
                        <div className="banner11 bannertext">
                           
                            <div className="vision1">
                                <h3 className=" ">  Vision</h3>
                               <blockquote>
                               <h4 className="mainh3vision"><q>  Transform organizations towards
                                data-based decision making  </q></h4>
                                </blockquote> 
                                    
                            </div>
                                {/* <div className="banner11 bannerheading">
                                <div>
                                    <h1>RAINMAKER</h1>
                                    <h3>Business Analytics</h3>
                                </div>
                                </div> */}
                                {/* <img alt="banner"  src="assets\HomeBanner.jpg" 
                                id="header-image" 
                                    className="header-image"  />  */}
                          
                            <div className="vision2">
                                <h3 className="">  Mission</h3>
                                <blockquote>
                                <h4 className=" mainh3vision"><q>  Develop data-driven decision-making culture in
                                     companies that creates 
                                    actionable intelligence for increased 
                                    customer understanding and improved operations  </q></h4> 
                              
                                </blockquote>
                                
                                
                            </div>
                        </div>
                        
                        
                </div>
             <div className="homecontent">
                 
                <div className="about">
                   
                    <div className="about11 aboutlt ">
                        <h3 className="mainh3">Who We Are</h3>
                        <p>
                        Rainmaker Business Analytics (Rainmaker BA) exists to support companies that are 
                        committed to making data-driven decisions. We understand that in today’s fast-growing
                        world the success of a company depends on making the right kind of decisions and 
                        understanding the customers. Data has become a prominent resource where we can 
                        analyze to find the hidden truths and generate business insights. We at Rainmaker
                        BA have the required knowledge and experience to help you make the right decisions
                        at the right time with the help of state of art analytics skills. Give us your 
                        data and we will bring transformation to your company that improves your bottom
                        line.  

                        </p>

                    </div>
                    
                    <div className="about11 aboutrt ">
                       
                        <img src="assets\whoweare.jpg"
                                    alt="blog" 
                                    className="events-bg-image" />
                        
                       

                    </div>
                    
                                    
                </div>
                
                <div className="abtrmker">
                    <div className="abtrmker11 abtrmkerlt ">
                        <img src="assets\whyrainmaker.jpg"
                                    alt="blog" 
                                    className="events-bg-image" />

                   </div>
                   
                   <div className="abtrmker11 abtrmkerrt">
                       <h3 className="mainh3">Why Rainmaker BA</h3>
                       <p>
                       In Rainmaker BA, we have experienced professionals with state of art analytics 
                       skillsets. Rainmaker BA is managed by partners trained from prestigious
                        institutes & having extensive business domain experience. We are proficient
                        in the best practices of big data, machine learning & business domains.
                        We have the expertise to develop innovative applications and deployment 
                        that will increase market share, reduce resources, or make operations agile.
                        Rainmaker BA is specialized in unstructured big data solutions.

                       </p>

                   </div>
                              
               </div>
               </div>
               {/* <div className="advantagecontent"> */}
               <div className="advantage">
                   
                    <div className="advanabout11 advanlt">
                        <h3 className="mainh3">Our Competitive Advantages</h3>
                        <div  className="advanpara1"><FontAwesomeIcon className="font-awesome  " icon={faCaretRight} />
                         <span className="spaceadvan">Professional and local consultancy services experience</span>
                         </div>
                         <div  className="advanpara1"><FontAwesomeIcon className="font-awesome" icon={faCaretRight} />
                        <span className="spaceadvan">Legacy Open source software and tools for low cost, reliability and flexibility </span></div>
                        <div className="advanpara1"><FontAwesomeIcon className="font-awesome" icon={faCaretRight} />
                        <span className="spaceadvan">Collaboration with global companies ensuring industry best practices</span></div>
                        <div className="advanpara1"><FontAwesomeIcon className="font-awesome" icon={faCaretRight} />
                        <span className="spaceadvan">Vertical know-how and best practices of big data, machine learning & business domains</span></div>
                        <div className="advanpara1"><FontAwesomeIcon className="font-awesome" icon={faCaretRight} />
                        <span className="spaceadvan">Innovative application development & deployment for increasing market share, reducing resources or agile operations</span></div>
                        <div className="advanpara1"><FontAwesomeIcon className="font-awesome" icon={faCaretRight} />
                        <span className="spaceadvan">Specialized in unstructured big data solutions</span></div>
                        <div className="advanpara1"><FontAwesomeIcon className="font-awesome" icon={faCaretRight} />
                        <span className="spaceadvan">Managed by partners trained from prestigious institutes & having business domain experience</span></div> 
                        <div className="advanpara1"><FontAwesomeIcon className="font-awesome" icon={faCaretRight} />
                        <span className="spaceadvan">Has end to end service capability for business analytics program in companies</span></div>


                    </div>
                   
                    <div className="advanabout11 advanrt ">
                        <img src="assets\ourcompetitiveadvan.jpg"
                                    alt="blog" 
                                    className="events-bgadvan-image" />

                    </div>
                    </div>
                                    
                {/* </div> */}
                
                <div className="domain">
                    <h3 className="mainh3">Domains We Offer Service</h3>
                    <div className="services">
                        <div className="service">
                            <h5>Financial Analytics</h5>
                            <h5>Supply-chain Analytics</h5>
                            <h5>Agricultural Analytics</h5>
                            <h5>Market Analytics</h5>
                        </div>
 
                    
                        <div className="service">
                            <h5>Ecommerce Analytics</h5>
                            <h5>Educational Institution Analytics</h5>
                            <h5>HR Analytics</h5>
                            <h5>Fraud Analytics</h5>
                         
                        </div>
                       
                   
                        <div className="service">
                            <h5>Hospitality Analytics</h5>
                            <h5>Health Care Analytics</h5>
                            <h5>Food Analytics</h5>
                            <h5>Logistics Analytics</h5>
                     
                        </div>
                    </div>
                                       
                </div>
                <div className={this.state.isOpen?"wrapper cookiewrapper active":"wrapper cookiewrapper"}>
                    <h6>Cookie Consent</h6>
        <p>
            By continuing to browse or by clicking 'accept', you agree to storing of cookies
            on your device to enhance your site experience and for analytical purposes. To
             learn more about how we use the cookies, please see our &nbsp; 
            <Link to="/Cookiepolicy" className="links">cookies policy</Link>&nbsp; and &nbsp; 
             <Link to="/Privacypolicy" className="links">privacy policy</Link>.
        </p>
        <button className="cookiebtn" onClick={this.handleToggle}>Accept AND CLOSE</button>
    </div>
                {/* <Link to="#navbar">
                <FontAwesomeIcon className ="font-awesome2" style={{height:'4em', width:'4em'}} 
                icon={faAngleUp} />
                             
             </Link> */}
                     
            </div>
        )
        
    }
}