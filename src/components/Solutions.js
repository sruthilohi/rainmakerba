import React , {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import '../Styles/insights.css'
import '../App.css'
export default class Insights extends Component {
    render(){
        return(
            <div className="insights" id="insightstop">
              
                <div className="insights1">
                  <div className="insights11 ">
                    
                    {/* <div className="insights11box "> */}
                        <div className=" bg-faded side_box_eventslt side-box-wrapper_events  "  >
                            <h3 className="side_box_title"> ARCHIVES 
                             <span className="side-box-date">June 2020</span></h3>
                           
                            
                            <p className="side_box_subtitle events_para" 
                            
                            > Rainmaker Analytics, we understand that in today’s fast growing world the 
                            success of a company depends on making right kind of key decisions and 
                            understanding the customers.  
                            </p>
                        </div>
                        {/* </div> */}
                        {/* <div className="insights11box "> */}
                        {/* <div className=" bg-faded side_box_eventslt side-box-wrapper_events"  >
                            <h3 className="side_box_title" 
                            > NEWS</h3>
                            
                            <p className="side_box_subtitle events_para" 
                            
                            > Rainmaker Analytics, we understand that in today’s fast growing world the 
                            success of a company depends on making right kind of key decisions and 
                            understanding the customers.  
                            </p>
                        </div> */}
                    {/* </div> */}
                </div>
                <div className="insights11">
                    <div className="insights11rtwrap">
                        <h3 className="">Recent Success Stories</h3>
                        
                        <div className=" side-box-rt">
                            <div className="insights11box ">
                                {/* <div className="insights11image">
                                    <img src="assets\banner.jpg"
                                    alt="blog" 
                                    className="events-sm-image" />
                                </div>   */}
                                <div className="insights11content">
                                        <h5 className="events-head" >Business use case 1</h5>
                                        <p className="events_para parabot" > Rainmaker BA assisted a pharmaceutical company in Qatar
                                         for improving the performance of its e-commerce site. The business questions answers 
                                         through our analytics were</p>
                                            <p className="advanpara "><FontAwesomeIcon className="font-awesome " icon={faCaretRight} />
                                            <span className="space1">Which product categories are experiencing decreasing sales?
                                            </span></p>
                                            <p className="advanpara "><FontAwesomeIcon className="font-awesome " icon={faCaretRight} />
                                            <span className="space1">Which product categories and experiencing constant sales?
                                            </span></p>
                                            <p className="advanpara "><FontAwesomeIcon className="font-awesome " icon={faCaretRight} />
                                            <span className="space1">What are the best hours of the day and the best days in a week<span className="space2">to promote products?</span> 
                                            </span></p>
                                            <p className="advanpara "><FontAwesomeIcon className="font-awesome " icon={faCaretRight} />
                                            <span className="space1">Analysis of returns of the products.
                                            </span></p>
                                        
                                </div>
                                      
                                                            
                            </div>
                            <div className="insights11box ">
                                {/* <div className="insights11image">
                                    <img src="assets\banner.jpg"
                                    alt="blog" 
                                    className="events-sm-image" />
                                </div>   */}
                                <div className="insights11content">
                                        <h5 className="events-head" >Business use case 2</h5>
                                        <p className="events_para parabot" > Diagnostic analytics by 
                                        Rainmaker BA assisted a process automation company 
                                        based in Europe to answer the following questions </p>
                                        <p className="advanpara "><FontAwesomeIcon className="font-awesome " icon={faCaretRight} />
                                        <span className="space1">How is the social media performance of the company compared<span className="space2"> to competitors?</span>
                                        </span></p>
                                        <p className="advanpara "><FontAwesomeIcon className="font-awesome " icon={faCaretRight} />
                                        <span className="space1">What content in social media of the competitor is engaging<span className="space2"> the customers?</span>
                                        </span></p>
                                        <p className="advanpara "><FontAwesomeIcon className="font-awesome " icon={faCaretRight} />
                                        <span className="space1">What is the type and nature of social media content that will engage<span className="space2"> the customers?</span>
                                        </span></p>
                                        <p className="advanpara "><FontAwesomeIcon className="font-awesome " icon={faCaretRight} />
                                        <span className="space1">What channels and language variations need to be dropped for <span className="space2">rationalising the social media strategy?</span>
                                        </span></p>
                                     
                                       
                                </div>
                                      
                                                            
                            </div>
                            <div className="insights11box ">
                                {/* <div className="insights11image">
                                    <img src="assets\banner.jpg"
                                    alt="blog" 
                                    className="events-sm-image" />
                                </div>   */}
                                <div className="insights11content">
                                        <h5 className="events-head" >Business use case 3</h5>
                                        <p className="events_para parabot" > Rainmaker BA assisted a 
                                        health care product company for product diversification
                                         by answering the following questions based on past data </p>
                                         <p className="advanpara "><FontAwesomeIcon className="font-awesome " icon={faCaretRight} />
                                        <span className="space1">Should a separate brand variation be created for ladies?
                                        </span></p>
                                        <p className="advanpara "><FontAwesomeIcon className="font-awesome " icon={faCaretRight} />
                                        <span className="space1">Should a specific advertising campaign be created to target ladies?
                                        </span></p>


                                       
                                </div>
                                      
                                                            
                            </div>
                            
                        </div>
                        </div>
                        {/* insights11rtwrap */}
                        <div className="insights11rtwrap">
                        <h3 id="trendingtopics">Recent Trending Topics</h3>
                        
                        <div className=" side-box-rt">
                            <div className="insights11box ">
                                {/* <div className="insights11image">
                                    <img src="assets\banner.jpg"
                                    alt="blog" 
                                    className="events-sm-image" />
                                </div>   */}
                                <div className="insights11content">
                                        <h5 className="events-head" >How Brands are addressing customer messaging during COVID</h5>
                                        <p className="events_para" > The digital medium is seen as key to customer
                                         engagement during these pandemic times. The pandemic has caused changes in 
                                         social practices due to social distancing and lockdown policies resulting in 
                                         loss of access to products. The brand message needs to be adapted to these
                                        rapidly changing environments. Brand messages with the right flavor and 
                                        context can improve the salience. A brand advertising strategy that focuses
                                        on the wellbeing of the customers can generate enormous brand equity.
                                        Companies need to create compelling visual images that communicate empathy
                                        with the thinking and feeling of the customers. Every brand has its challenges,
                                        wants, and concepts. The brand advertising needs to reflect these issues and at 
                                        the same time enhance customer experience by aligning with their sentiments and 
                                        anticipations. For example, some brands are putting out advertisements that
                                        discourage panic buying and contributing to charities that support the vulnerable.
                                        </p >
                                        <p className="events_para">The pandemic of COVID 19 has made understanding the cultural 
                                        intelligence and behavior of customers and integrating them into the brand image more
                                        important. A brand with excellent cultural competency will be able to manage the customer
                                        sentiment much better. Understanding cultural sentiment will lead a company to focus 
                                        more on taking up issues that are important to the customer but can be correlated to
                                        the brand. An example will be hygiene companies spreading messages about how to protect
                                        from the virus rather than pushing their brands. Such communications show sensitivity 
                                        through creative and proactive communication that will result in customer engagement.

                                        </p >
                                        <p className="events_para">Brands can make use of analytics technology to automate 
                                        and optimize the process of providing targeted customer experiences across channels.
                                        When customer behaviors are subjected to data analytics, it enables greater precision
                                        in targeting customers and hence increases the accountability of the brand advertising
                                        budget. Brands can complement their data with data from partners to create personalized
                                        customer experiences of better quality. Analytics will also enable companies to align 
                                        and adjust the brand advertising spending to demand fluctuations. This is especially 
                                        true since outdoor media demand has dropped drastically and the requirement for online
                                        entertainment and trusted news has increased.  

                                        </p>
                                        <p className="keypara"><span>Keywords:</span> Customer Sentiment, 
                                        Customer Culture, Brand Intelligence, Brand Analytics.

                                        </p>
                                </div>
                                      
                                                            
                            </div>
                            {/* <div className="insights11box ">
                                <div className="insights11image">
                                    <img src="assets\banner.jpg"
                                    alt="blog" 
                                    className="events-sm-image" />
                                </div>  
                                <div className="insights11content">
                                        <h5 className="events-head" >Article</h5>
                                        <p className="events_para" > Data as become the prominent source where we can analyze to find
                                        the hidden truths and finding some useful insights. We are here to
                                        help you make the right decisions at right time with help of state
                                        of art analytics skill sets we have. 
                                        </p>
                                </div>
                                      
                                                            
                            </div>
                            <div className="insights11box ">
                                <div classNmae="insights11image">
                                    <img src="assets\banner.jpg"
                                    alt="blog" 
                                    className="events-sm-image" />
                                </div>  
                                <div className="insights11content">
                                        <h5 className="events-head" >Article</h5>
                                        <p className="events_para" > Data as become the prominent source where we can analyze to find
                                        the hidden truths and finding some useful insights. We are here to
                                        help you make the right decisions at right time with help of state
                                        of art analytics skill sets we have. Data as become the prominent source where we can analyze to find
                                        the hidden truths and finding some useful insights.
                                        </p>
                                </div>
                                      
                                                            
                            </div> */}
                            
                        </div>
                        </div>
                        {/* insights11rtwrap */}
                        <div className="insights11rtwrap">
                        <h3 id="featuredarticles">Recent Featured Articles</h3>
                        
                        <div className=" side-box-rt">
                            <div className="insights11box ">
                                <div classNmae="insights11image">
                                    <img src="assets\banner.jpg"
                                    alt="blog" 
                                    className="events-sm-image" />
                                </div>  
                                <div className="insights12content">
                                        <h5 className="events-head" >Avoiding pitfalls when building a data analytics team</h5>
                                        <p className="events_para" > Developing a data analytics team is a challenging task. 
                                        To establish data analytics as a strategic strength of the organization, building an
                                        effective team that is technically and culturally competent to handle the challenges
                                        is important. The below link shows an article that inform about five critical roadblocks
                                        encountered while developing analytics teams, according to the Gartner Annual CDO 
                                        (Chief Data Officer) Survey. 
                                        </p >
                                        <p className="articlelinks">
                                        <a href="https://www.gartner.com/smarterwithgartner/avoid-5-pitfalls-when-building-data-and-analytics-teams/"
                                        title="">avoid-5-pitfalls-when-building-data-and-analytics-teams </a>
                                        </p >
                                        <p className="keypara"><span>Keywords:</span> Cultural Change, Data Literacy, Data Skills, Strategic Focus</p>
                                </div>
                                      
                                                            
                            </div>
                            <div className="insights11box ">
                                <div classNmae="insights11image">
                                    <img src="assets\banner.jpg"
                                    alt="blog" 
                                    className="events-sm-image" />
                                </div>  
                                <div className="insights12content">
                                        <h5 className="events-head" >Organizing customers using segmentation</h5>
                                        <p className="events_para" >Segmentation is an important tool for managing customer 
                                        relations. This is essential for giving a more personalized service that will improve 
                                        customer engagement. The article in the below link gives an idea about how about models
                                        and type of customer segmentation. 
                                        </p>
                                        <p className="articlelinks">
                                        <a href="https://blog.hubspot.com/service/customer-segmentation"
                                        title="">customer-segmentation</a>
                                        </p>
                                        <p className="keypara">
                                        <span>Keywords:</span> Customer Segmentation Models, Customer Segmentation Strategy
                                        </p>
                                </div>
                                      
                                                            
                            </div>
                            {/* <div className="insights11box ">
                                <div classNmae="insights11image">
                                    <img src="assets\banner.jpg"
                                    alt="blog" 
                                    className="events-sm-image" />
                                </div>  
                                <div className="insights12content">
                                        <h5 className="events-head" >Article</h5>
                                        <p className="events_para" > Data as become the prominent source where we can analyze to find
                                        the hidden truths and finding some useful insights. We are here to
                                        help you make the right decisions at right time with help of state
                                        of art analytics skill sets we have. Data as become the prominent source where we can analyze to find
                                        the hidden truths and finding some useful insights.
                                        </p>
                                </div>
                                      
                                                            
                            </div> */}
                            
                        </div>
                        </div>
                        {/* insights11rtwrap */}
                   </div>
                               
                </div>
            </div>
        )
    }
}
// {/* style={{
//                             borderBottom: ".5px solid #d6dadd",paddingBottom: "1em"
//                             }} */}
/* <div className="process_side_box side_box_eventsrt">
                                    
                                    <img src="assets\banner.jpg"
                                    alt="blog" 
                                    className="events-sm-image" />
                                
                                        <h5 className="events-head" >Article</h5>
                                        <p className="events_para" > Data as become the prominent source where we can analyze to find
                                        the hidden truths and finding some useful insights. We are here to
                                        help you make the right decisions at right time with help of state
                                        of art analytics skill sets we have</p>
                                
                                
                            </div> */

// import React from 'react'


// const Solutions =() => (
//     <div className="analyticsolution">
//         <div className="solutions1">
           
//             <h3 className="mainh3">Analytics Solutions</h3>
//             <div className="solutions12">
//                 <div className="solutions121">
//                     <p> Establish business analytics program in companies. </p>

//                 </div>
//                 <div className="solutions121">
//                     <p>Create Dashboards to improve CEO/Executive decision-making process.</p>
//                 </div>
//                 <div className="solutions121">
//                     <p>Train customer employees in analytics concepts.</p>

//                 </div>
//                 <div className="solutions121">
//                     <p>Secondment of analytics personal</p>

//                 </div>
//                 <div className="solutions121">
//                     <p>Advising on smart data capture for realizing analytics-based decision making.</p>
//                 </div>
               
//             </div>
//         </div>
           
       
//     </div>


// );
// export default Solutions;
