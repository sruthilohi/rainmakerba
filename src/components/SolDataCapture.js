import React , {Component} from 'react'
import '../Styles/soldatacapture.css'
import '../App.css'
class SolDataCapture extends Component{
    render() {
        return(
            <div className="datacapture" >
                {/* <div className="linetop"> */}

                {/* </div> */}
           
            <div className="datacapture1">
                <h3 className="mainh2">Smart data capture for an analytics program</h3>
                <div className="datacapturepara1">
                    <div  className="datacapture11 ">
                    
                    <p>Implementation of analytics programs often fails due to the lack of 
                        or low quality of available data. The first action Rainmaker BA 
                        performs on a new client is a maturity assessment on the company’s
                        information architecture and data sources based on analytical 
                        requirements. Transactional, aggregated, and operational 
                        information is scored for quality, and the existing infrastructure’s
                        ability to support new sources and data feed is evaluated.The time required to acquire, clean, and analyze new data is 
                        evaluated and built into the adjustment period. Businesses with 
                        multiple systems and large stores of data often struggle with
                        duplicate data, out-of-date records, junk data, including falsified, 
                        or unverified content and missing information.  Rainmaker BA can 
                        implement approaches that ensure data quality that includes processes
                        such as de-duplication, refreshment, synchronization, cleansing, 
                        enrichment.  
                        
                    </p>
                    </div>
                    <div className="datacapture11 ">
                    <img src="assets\smartdatacapture.jpg"
                                        alt="blog" 
                                        className="events-md-image" />
                    </div>
                </div>
            </div>
            <div className="datacapture2">
                    <div className="datacapture21">
                    <p>
                        Understanding the nature of data available and the method of data capture is
                        important. It is simple to identify, extract and leverage the data that resides
                        in structured systems, such as databases and ERP, CRM and SCM applications. 
                        However, to parse unstructured content and then turn it into usable 
                        information—especially in an automated environment is challenging. In current
                        times, the bulk of the information of companies is present in business documents,
                        emails, social media texts/images – data that is unstructured. The challenge
                        is to capture, catalog and prepare this data for use by analytical models
                        to unlock valuable information that can drive productivity, shrink cycle
                        times, improve decision making and boost the bottom line. Periodic audits
                        of the data capture process are also important to evaluate its fit with
                        the operational process. This will ensure that the right information is 
                        identified, extracted, and then delivered to applications as needed. 
                    </p>
                    </div>
                   
                   
                    <div className="datacapture21">
                    <p>
                        Automating the data capture can provide incremental benefits to the analytics program.
                        This capability will enable us to provide new offerings that respond to changes in 
                        customer demand and manage seasonal staffing fluctuations, allowing businesses to 
                        remain competitive by boosting productivity and digitally replicating customer 
                        experiences multifold times. Automating data capture allows flexibility and 
                        scalability to generate data-driven insights that are correlated to user experience.
                        Automating data capture increases corporate agility, allowing organizations to 
                        quickly respond to market changes and new customer demands, which ensures they 
                        stay competitive in an always-changing, fast-moving world.
                    </p>
                    </div>
               
            </div>
                
           
        </div>

        )
    }
   
}
export default SolDataCapture