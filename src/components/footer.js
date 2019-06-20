import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
class Footer extends Component {
   
  render() {
      return(
        <div className="footer-outer">
        <Container>
             <Row>
              <Col sm={6}>
                  <div className="footer">
                  <h3>Contact</h3>
                            <p>Tel: 020 7097 4857</p>
                            <p>Email: info@airguides.co.uk</p>
                  </div>
              </Col>
              <Col sm={6}>
                  <div className="footer">
                  <h3>Subscribe</h3>
                  </div>
              </Col>
              </Row>
           </Container>
           <div class="footer-copyrights">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <p><i class="fa fa-copyright"></i> 2019, AirGuides</p>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
        
      )
     
  }
}

export default Footer;
