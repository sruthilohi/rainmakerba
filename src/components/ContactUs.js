import React , {Component} from 'react'


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
// const phoneRegex = RegExp(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i);
  
  const formValid = ({ formErrors,...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    
    Object.values(formErrors).forEach(val => {
      val.length > 0 &&   (valid = false);
      
    });
    if(valid){
    // validate the form was filled out
    Object.values(rest.email).forEach(val => {
    val === null && (valid = false);
  });
    }
    
   
  
    return valid;
  };

export default class ContactUs extends Component {
    state = {
      firstname: "" ,
      lastname: "",
      phone:"",
      email:"",
      comment:"",
      err_message:false,
      formErrors: {
      firstname: "",
      lastname: "",
      email: "Enter valid Email",
      phone:"",
      comment: ""
  }
    }
  //   gettext=(text) => {
  //     var txtArea ;
  
  //     txtArea = document.getElementById('comment') ;
  //     txtArea.value +=  text + '\r\n';
  // }

    getPHP = e => {
        e.preventDefault();

    if (formValid(this.state)) {

    var formData = new FormData();
     formData.append('content1',document.getElementById('firstname').value);
     formData.append('content2',document.getElementById('lastname').value);
     formData.append('content3',document.getElementById('phone').value);
     formData.append('content4',document.getElementById('email').value);
     formData.append('content5',document.getElementById('comment').value);
     
    //  fetch(`http://localhost:81/rainmakerba/phpmailer/index.php`, {   
      fetch(`https://rainmakerba.com/phpmailer/index.php`, {
        
     method: 'POST',
     headers: {

     } ,
     body:  formData 
         

    })
    .then((res)=>{
    let dparam=JSON.stringify(res);
    
    console.log(dparam);
    
    // .then(res => res.json())
   
    //  .then(myjson => {  
    //    console.log('response:');
    //    console.log(myjson);
            
    });
    
    document.getElementById("contact-formgroup").reset();

    this.setState({
      firstname: null,
      lastname: null,
      email:null,
      phone:null,
      comment:null,
      err_message:false,
          formErrors: {
          firstname: "",
          lastname: "",
          email: "Enter valid Email",
          phone:"",
         
          comment: ""
      }
    });
 
} else {
    this.setState({err_message: true});
 
    }
      
        

};
    
    

handleChange= e =>{
  e.preventDefault();
  const { name, value } = e.target;
  let formErrors = { ...this.state.formErrors };

  switch (name) {
    // case "firstname":
    //   formErrors.firstname =
    //   value.length < 2  ? "Enter valid name " : "";
    //   break;
    // case "lastname":
    //   formErrors.lastname =
    //     value.length < 2 ? "Enter valid name" : "";
    //   break;
    case "email":
      formErrors.email = emailRegex.test(value)
        ? ""
        : "Enter valid Email";
      break;
      // case "phone":
      // formErrors.phone = phoneRegex.test(value)
      //   ? ""
      //   : "Enter valid Phone number";
      // break;  
    
      // case "comment":
      // formErrors.comment =
      //   value.length < 4 ? "Enter your comments here" : "";
      // break;
    default:
      break;
  }
 

  this.setState({ formErrors, [name]: value });

};
       
    closeAlert() {

      this.setState({err_message: false});
         
    }
   

    render(){
      const { formErrors } = this.state;
        return(
            <div className="wrapper" id="contactform">
             <div>
              {this.state.err_message===true &&
                <div id="Alert1" className="alert alert-warning alert-dismissable" role="alert" 
                style={{marginLeft:'5em', marginRight:'1em'}}>
               
                  <p className="alertpara"> Please fill the * required fields</p> 
                  <button id="alertBtn" type="button" className="close" data-dismiss="alert" onClick={() => this.closeAlert()}>
                  &times;</button>
               
                                          
        
              </div>
              }
           </div>
              
              
                    <div className="contactform">

                        <form className="contact-formgroup" id="contact-formgroup">
                        <div className="inputfields">
                        <h3 className="mainh3">Contact Form</h3>
                        <p>
                                <label>FIRST NAME</label>
                                <input placeholder="First Name" 
                                type="text" name="firstname" id="firstname"
                                maxLength="15"
                                // className={formErrors.firstname.length > 0 ? "error" : null}
                                // style={{borderTop:'1px solid #d6dadd'}}
                                onChange={this.handleChange}

                               />
                            {/*                                
                              {formErrors.firstname.length > 0 && (
                              <span className="errorMessage">{formErrors.firstname}</span>
                            )} */}
                            </p>
                            <p>
                                <label>LAST NAME</label>
                                <input placeholder="last Name" 
                                type="text" name="lastname" id="lastname"
                                maxLength="15"
                                // className={formErrors.lastname.length > 0 ? "error" : null}
                                // style={{borderTop:'2px solid #d6dadd'}}
                                onChange={this.handleChange}
                                 />
                                  {/* {formErrors.lastname.length > 0 && (
                                  <span className="errorMessage">{formErrors.lastname}</span>
                                )} */}
                            </p>
                            <p>
                                <label>PHONE</label>
                                <input placeholder="Phone" 
                                 type="text" name="phone" id="phone"
                                //  className={formErrors.phone.length > 0 ? "error" : null}
                                //  style={{borderTop:'2px solid #d6dadd'}}
                                 onChange={this.handleChange}
                               />
                                {/* {formErrors.phone.length > 0 && (
                                  <span className="errorMessage">{formErrors.phone}</span>
                                )} */}
                            </p>
                            <p>
                                <label>EMAIL  {formErrors.email.length > 0 && (
                                    <span className="errorMessage">{formErrors.email}</span>
                                  )}</label>
                               
                                <input placeholder="Email" 
                               type="email" name="email" id="email"
                              //  className={formErrors.email.length > 0 ? "error" : null} 
                                // style={{borderTop:'2px solid #d6dadd'}} 
                               onChange={this.handleChange}
                                 />
                                 
                            </p>
                           
                            {/* value={this.state.emailadd} */}
                       </div>
                       <div className="message">
                            <p >
                                <label>COMMENT</label>
                            <textarea placeholder="Comment" 
                             type="text" name="comment" id="comment"
                             rows="5" maxLength="300"
                            //  className={formErrors.comment.length > 0 ? "error" : null}
                            //  style={{borderTop:'2px solid #d6dadd'}} 
                             onChange={this.handleChange}
                               ></textarea>
                                {/* {formErrors.comment.length > 0 && (
                                <span className="errorMessage">{formErrors.comment}</span>
                              )} */}
                            </p>
                            <p >
                                <button className="submitbtn" onClick={this.getPHP}>Submit</button>
                            </p>
                       </div>
                       </form>
                    </div>

               
             </div>
           
        
        
        )
    }
}