import React , {Component} from 'react'
import {Link} from 'react-router-dom'

import '../Styles/cookie.css'
import '../App.css'


export default class CookieAlert extends Component {

   



render(){
    return(
<div className="cookiewrapper">
        <p>
            By continuing to browse or by clicking 'accept', you agree to storing of cookies
            on your device to enhance your site experience and for analytical purposes. To
             learn more about how we use the cookies, please see our 
             <Link to="/Cookiepolicy" className="links"><p>cookies policy</p></Link> and 
             <Link to="/Privacypolicy" className="links"><p>privacy policy</p></Link>.
        </p>
    <button className="cookiebtn">OKAY AND CLOSE</button>
    </div>
    )
}
    
}
