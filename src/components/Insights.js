import React , {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import '../Styles/insights.css'
import '../App.css'

export default class Insights extends Component {
    
   paraToggle = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("paraBtn");
    

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = " More..."; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "<<"; 
        moreText.style.display = "inline";
      }
     
    }
      
   paraToggle1 = () => {
    
    var dot1 = document.getElementById("dot1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("paraBtn1");
  

      if (dot1.style.display === "none") {
        dot1.style.display = "inline";
        btnText1.innerHTML = " More..."; 
        moreText1.style.display = "none";
      } else {
        dot1.style.display = "none";
        btnText1.innerHTML = "<<"; 
        moreText1.style.display = "inline";
      }
    }




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
                                        </p ><span id="dots"></span><span id="more"> 
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
                                        entertainment and trusted news has increased. </p></span>
                                        <button className="parabtn"   id="paraBtn" onClick={this.paraToggle}>View more ...</button> 
                                        
                                       
                                        <p className="keypara"><span>Keywords:</span> Customer Sentiment, 
                                        Customer Culture, Brand Intelligence, Brand Analytics.

                                        </p>
                                </div>
                                      
                                                            
                            </div>
                            <div className="insights11box ">
                                {/* <div className="insights11image">
                                    <img src="assets\trending topics 21.jpg"
                                    alt="blog" 
                                    className="events-sm-image" />
                                </div>   */}
                                <div className="insights11content">
                                        <h5 className="events-head" >Analytics for Commercial Vehicle Industry</h5>
                                        <p className="events_para" > Indian Commercial Vehicle Industry has always been most
                                        sought-after topic of Research and Consultation. The high TIV (Total Industry Volumes)
                                        and the high uncertainty of demand defines the rule of this business. The Industry has
                                        historically undergone transformations from time to time in an incremental manner.
                                        For example, the Load per Km per Ton for vehicles have advanced over a long period.
                                        But the industry has witnessed sea change in the last three years, resulting in high
                                        level of strategic redundancy, collapse of the conventional business processes and 
                                        connect with the market. Some of the milestone changes of last 3 years are identified 
                                        in table below: - 
                                        <table >
                                            <tr>
                                                <th>YEAR</th>
                                                <th>MILESTONE</th>
                                               
                                            </tr>
                                            <tr>
                                                <td>2017</td>
                                                <td>BSIII to BSIV Transition</td>
                                               
                                            </tr>
                                            <tr>
                                                <td>2018</td>
                                                <td>Revised Axle Norms</td>
                                                
                                            </tr>
                                            <tr>
                                                <td>2019</td>
                                                <td>Last Year for BSIV Vehicles Manufacturing</td>
                                               
                                            </tr>
                                            <tr>
                                                <td>2020</td>
                                                <td>BSIV to BSVI Transition</td>
                                               
                                            </tr>
                                        </table>
                                        </p><span className="parabtn"  id="dot1"></span><span id="more1">
                                        <p className="events_para">Absence of structured research of industry data has resulted in manufacturers being 
                                        “Opportunity Blind” to address these challenges. The COVID19 crisis has further 
                                        aggravated the situation as this change could not be anticipated and provisioned. 
                                        The current situation has brought the commercial vehicle market to a position where 
                                        survival is an achievement. The sales trend of commercial vehicles was on a declining 
                                        trend even before the COVID crisis as can be seen from the below graph.
                                        </p>
                                       
                                        <p className="events_para">
                                        <div className="insights11image ">
                                            <img src="assets\trendingtopics2.jpg"
                                            alt="blog" 
                                            className="events-md-image" />
                                     
                                        
                                            <img src="assets\trending topics 21.jpg"
                                            alt="blog" 
                                            className="events-md-image" />
                                         </div>
                                        </p>
                                        
                                         <p className="events_para">Data analytics can enable companies associated with commercial vehicle market to
                                            address the current challenges. Data analytics can transform the commercial vehicle
                                            industry like how ERP software led by SAP integrated the entire supply chain and
                                            transformed the industry to overcome the effects of 1998 recession. Business analysis
                                            using Big Data technologies will enable companies to answer the following questions
                                            in the commercial vehicle segment:
                                        </p>

                                        <p className="events_para">
                                            <p className="insightpara1"><FontAwesomeIcon className="font-awesome  " icon={faCaretRight} />
                                            <span className="spaceinsight">What is the probability of achieving optimal inventory?</span>
                                            </p>
                                            <p  className="insightpara1"><FontAwesomeIcon className="font-awesome  " icon={faCaretRight} />
                                            <span className="spaceinsight">What is the price band for maintaining profitability for a product range?</span>
                                            </p>
                                            <p  className="insightpara1"><FontAwesomeIcon className="font-awesome  " icon={faCaretRight} />
                                            <span className="spaceinsight">What is the right product mix for achieving overall profitability?</span>
                                            </p>
                                            <p  className="insightpara1"><FontAwesomeIcon className="font-awesome  " icon={faCaretRight} />
                                            <span className="spaceinsight">Which set of customers are most appropriate for a profitable Relationship?</span>
                                            </p>
                                        </p>
                                        <p>While undertaking the data analysis, it should be noted that market was giving indications
                                            of current situation from Nov 2018.  There was huge slowdown in demand from year 2019 and 
                                            this trend is expected to continue for some years to come. Hence the biggest challenge will
                                            be to predict the demand trend in the coming years. The past crisis of the years 1998-99,
                                            2001-2003, 2009-2010(1st quarter), 2013~2014, 2019 may help in modelling the trends,
                                            but may have limited validity due to the changes to underlying demand factors.
                                        </p></span>
                                        <button className="parabtn"  id="paraBtn1" onClick={this.paraToggle1}>View more ...</button> 
                                        
                                </div>
                                      
                                                            
                            </div>
                             {/*<div className="insights11box ">
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
                                {/* <div classNmae="insights11image">
                                    <img src="assets\banner.jpg"
                                    alt="blog" 
                                    className="events-sm-image" />
                                </div>   */}
                                {/* <div className="insights12content"> */}
                                <div className="insights11content">
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
                                {/* <div classNmae="insights11image">
                                    <img src="assets\banner.jpg"
                                    alt="blog" 
                                    className="events-sm-image" />
                                </div>   */}
                                {/* <div className="insights12content"> */}
                                <div className="insights11content">
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