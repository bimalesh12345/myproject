import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';


const formValid = ({value, ...rest}) => {
  let valid=true;
  Object.values(value).forEach(val =>{
      val.length > 0 && (valid=false);
  });
  Object.values(rest).forEach(val =>{
      if(val ==null) {
          valid=false;
      }
  })
  return valid;
}


class Contact extends Component {
  constructor(props){
    super(props)
    this.state = { status: 0,
      FirstName:null,
      LastName:null,
      Telephone:null,
      Email:null,
      Subject:null,
      Message:null,
      value:{
            FirstName:"",
            LastName:"",
            Telephone:"",
            Email:"",
            Subject:"",
            Message:""
       },
      valid:{
        FirstName:"",
        LastName:"",
        Telephone:"",
        email:"",
        subject:"",
        Message:""
    },
    validMessage:""
   
    }
       
    
}

componentDidMount() {
       
  fetch('/api/customers')
    .then(res => res.json())
    .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers))); 

   
}

emailSend =() =>{
  var data = {
    "email": this.state.Email,
    "subject": this.state.Subject,
    "body": this.state.Body
 }
var headers= {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
 fetch('/api/sendemail', {
    method: "POST",
    headers: headers,
    body:  JSON.stringify(data)
    })
    .then(function(response){ 
      return response.json();   
    })
    .then(data => { 
      this.emailConfirmation(data);
    });

}

emailConfirmation = (conf) =>{
  if(conf===null && conf ===""){
    this.setState({
      validMessage:"Sorry! Your request is submitted."
    });
  }
  else{
    this.setState({
      validMessage:"Thank you, your request has been submitted successfully."
    });
  }
}
  submitContactus = (e) =>{
    e.preventDefault();
    let {valid, value} = this.state;
    if(formValid(this.state)){
      console.log(`
      Email:${this.state.Email}
      Subject:${this.state.Subject}
      Body:${this.state.Body}
      `);
      this.emailSend();
   }
   else{
       if(value.Email==null || value.Email===""){
        valid.email="error";
       }
       else{
        valid.email="valid";
       }
       if(value.Subject==null || value.Subject===""){
        valid.subject="error";
       }
       else{
        valid.subject="valid";
       }
       if(value.Message==null || value.Message===""){
        valid.Message="error";
       }
       else{
        valid.Message="valid";
       }
       if(value.FirstName==null || value.FirstName===""){
        valid.FirstName="error";
       }
       else{
        valid.FirstName="valid";
       }
       if(value.LastName==null || value.LastName===""){
        valid.LastName="error";
       }
       else{
        valid.LastName="valid";
       }
       if(value.Telephone==null || value.Telephone===""){
        valid.Telephone="error";
       }
       else{
        valid.Telephone="valid";
       }
       this.setState({
        validMessage:""
      });
       this.setState(valid);
       console.log("Form Invalid");
   }
  }
          textChange = (e) => {
            this.setState({
                validMessage:1
              });
            e.preventDefault();
            const{name,value} = e.target;
            let values = this.state.value;
            let {valid} = this.state;
            let inputValid = this.state;

        switch (name) {
            case 'Email':
              inputValid.Email= value;
              inputValid.Email.length < 1 ? valid.email="error":valid.email="valid";
                break;
          case 'Subject':
          inputValid.Subject= value;
          inputValid.Subject.length < 1 ? valid.subject="error":valid.subject="valid";
             
                break;
          case 'Body':
              inputValid.Body= value;
              inputValid.Body.length < 1 ? valid.body="error":valid.body="valid";
             break;
            default:
                break;
        } 

        
            this.setState(this.state);
            console.log("Form Invalid");

        this.setState({inputValid, [name]:value}, () => console.log(this.state));

        this.setState({values, [name]:value}, () => console.log(this.state));
        }
  
    render() {
      const {value, valid} = this.state;
        return(
          
           <div className="page">
           <div className="pagetitle">
              Contact Us
           </div>
               <form onSubmit={this.submitContactus}>
               <Container className="contactuspage">
               <Row>
               <Col sm={12}>
                       <div className="textbox">
                            <label for="firstname">First Name:</label>
                            <input type="text"  name="FirstName" className={(value.FirstName.length > 0?"error":null)||(valid.LastName)} onChange={this.textChange} noValidate />
                        </div>
                      </Col>
                   </Row>
                   <Row>
                   <Col sm={12}>
                       <div className="textbox">
                            <label for="lastname">Last Name:</label>
                            <input type="text"  name="LastName" className={(value.LastName.length > 0?"error":null)||(valid.LastName)} onChange={this.textChange} noValidate />
                        </div>
                      </Col>
                   </Row>
                    <Row>
                       <Col sm={12}>
                       <div className="textbox">
                            <label for="to">Email:</label>
                            <input type="email"  name="Email" className={(value.Email.length > 0?"error":null)||(valid.email)} onChange={this.textChange} noValidate />
                        </div>
                      </Col>
                   </Row>
                   <Row>
                   <Col sm={12}>
                       <div className="textbox">
                            <label for="Telephone">Telephone:</label>
                            <input type="phone"  name="Telephone" className={(value.Telephone.length > 0?"error":null)||(valid.Telephone)} onChange={this.textChange} noValidate />
                        </div>
                      </Col>
                   </Row>
                   <Row>
                   <Col sm={12}>
                       <div className="textbox">
                        <label for="subject">Subject:</label>
                        <input type="text"  name="Subject" className={(value.Subject.length > 0?"error":null)||(valid.subject)} onChange={this.textChange} noValidate />
                        </div>
                      </Col>
                   </Row>
                   <Row>
                   <Col sm={12}>
                       <div className="textbox">
                        <label for="body">Message:</label>
                        <textarea cols="5" rows="5"  name="Message" className={ (value.Message.length > 0?"error":null)||(valid.Message)} onChange={this.textChange} noValidate></textarea>
                        </div>
                      </Col>
                   </Row>
                   <Row>
                   <Col sm={12}>
                       <div className="textbox consent">
                        <label for="body">Communication Preferences</label>
                        <Row>
                          <Col sm={3}><input id="const_email" class="checkbox" name="consent" type="checkbox" value="Email" />Email</Col>
                          <Col sm={3}><input id="const_text" class="checkbox" name="consent" type="checkbox" value="Text" />Text</Col>
                          <Col sm={3}><input id="const_phone" class="checkbox" name="consent" type="checkbox" value="Phone" />Phone</Col>
                          <Col sm={3}><input id="const_post" class="checkbox" name="consent" type="checkbox" value="Post" />Post</Col>

                        </Row>
                        </div>
                      </Col>
                   </Row>
                   <div class="test-box" style={{display: 'flex', justifyContent: 'space-between'}}>
                   <input id="contcheckbox" className="checkbox" name="contcheckbox" type="checkbox" />
                    <p>&nbsp;</p>
                    <div>I confirm that I want to receive special offers and information from <a href="http://airguides.co.uk/" target="_blank">www.airguides.co.uk </a> 
                  and they hold my data for that purpose only.<br />You may opt out at anytime.
                    <br />(Full details available on the use of data are available within the <a href="https://www.thefox-kirton.co.uk/index.php/privacy-policy-2/" target="_blank" rel="noopener noreferrer">privacy policy</a> area on this web site)</div>
                    </div>
                   <Row>
                   <Col sm={12}>
                       <div className="btnbox">
                      
                        <button type="submit" className="btn submit">Send</button>
                        </div>
                      </Col>
                   </Row>
                   <Row>
                   <Col sm={12}>
                       <div className="textbox messagebox">
                           {this.state.validMessage}
                        </div>
                      </Col>
                   </Row>
                   </Container>
                </form>
            
           </div>
        )
    }
}

export default Contact;