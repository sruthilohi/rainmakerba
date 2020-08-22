import React  , {Component} from 'react'
import { FaLinkedinIn,FaTwitter,FaFacebookF,
    FaWhatsapp } from 'react-icons/fa'
import { HashLink as Link } from 'react-router-hash-link';
   

import '../App.css'

export default class Footer extends Component {
    state = {
        isOpen : false,
    }

    handleToggle = () => {
        this.setState ({isOpen : !this.state.isOpen })
    }
    render(){
        return(
    <div className="footer">
        <div className="footertop">
            <div className="footerpara">
            
                <Link to="/" className="footerlogo ">
                    <p className="logopart1 ">Rainmaker</p>
                    <p className="logopart2 ">Business Analytics</p>
                </Link>
            
            
            </div>
            <div className="footerpara">
                <div className="footerpara2">
                    <div className="footerbottomlinks">
                    <Link to="/#homepagetop" className="links"><p>Home</p></Link>
                    <Link to="/Services#analyticservicetop" className="links"><p>Services</p></Link>
                    <Link to="/establishanalytics#establishtop" className="links"><p>Solutions</p></Link>
                    <Link to="/Insights#insightstop" className="links"><p>Insights</p></Link>
                    </div>
                    <div className="footerbottomlinks spacetopwrapper ">
                    <Link to="#" className="links"><p>< FaTwitter  /></p></Link>
                    <Link to="#" className="links"><p> < FaFacebookF /></p></Link>
                    <Link to="#" className="links"><p> < FaLinkedinIn /></p></Link>
                    <Link to="#" className="links"><p> < FaWhatsapp className="wup"/></p></Link>
                    </div> 
                </div>   
            </div>    
            
             <div className="footerpara">
                <Link to="/ContactUs#contactform">
                   <button type="button" className="getintch-button" 
                      onClick={this.handleToggle}>Get in touch with us</button>
                </Link> 
                         
                <p className="spacetopwrapper">sales@rainmakerba.com</p> 
               
              
            </div>


    </div>
    
<hr className="linebot"  />

<div className="footerbottom">
<p className="copyright">&copy;Rainmaker BA {(new Date().getFullYear())}. All rights reserved</p> 
<Link to="/Privacypolicy" className="links"><p>Privacy policy</p></Link>
{/* <p className="">Privacy policy</p>  */}
<Link to="/Cookiepolicy" className="links"><p>Cookie policy</p></Link>
<Link to="/Termsofuse" className="links"><p>Terms of use</p></Link>

</div>
</div>

)
        }
    }