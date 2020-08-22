import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Services from './Services'
import Insights from './Insights'
import ContactUs from './ContactUs'
import Footer from './Footer'
import SolDataCapture from './SolDataCapture'
import SolSecondment from './SolSecondment'
import SolTraining from './SolTraining'
import SolReporting from './SolReporting'
import SolEstablishAnalytics from './SolEstablishAnalytics'
import PrivacyPolicy from './Privacypolicy'
import CookiePolicy from './Cookiepolicy'
import Termsofuse from './Termsofuse'

// import Error from './Error'

const Router= () =>(
    <BrowserRouter>
     <div>
           
            <Navbar /> 
            
                    <Switch>
                            <Route path="/" exact  
                                    component={Home}/>
                                                                                        
                            <Route path="/services"  
                                   component={Services}/>
                            <Route path="/datacapture"
                                   component={SolDataCapture}/>
                            <Route path="/secondment"
                                   component={SolSecondment}/>
                            <Route path="/training"
                                   component={SolTraining}/>
                            <Route path="/reporting"
                                   component={SolReporting}/>
                            <Route path="/establishanalytics"
                                   component={SolEstablishAnalytics}/>
                           
                            <Route path="/Insights"  
                                   component={Insights}/>
                             <Route path="/ContactUs" 
                                   component={ContactUs}/>
                            <Route path="/Privacypolicy"  
                                   component={PrivacyPolicy}/>
                            <Route path="/Cookiepolicy"  
                                   component={CookiePolicy}/>
                            <Route path="/Termsofuse"  
                                   component={Termsofuse}/>
                            
                           
                            
                    </Switch>   
            
              <Footer /> 
      </div>  
    </BrowserRouter>
    );
    export default Router;