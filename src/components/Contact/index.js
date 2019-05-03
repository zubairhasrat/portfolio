import React from 'react';

const Contact = () => {
    return(
        <section className="resume-section p-3 p-lg-5 d-flex flex-column">
          <div className="row my-auto" id="contact"> 
            <div className="col-md-8">
              <div className="contact-cont">
                <h3>CONTACT</h3>
                <div className="heading-border-light"></div>
                <p></p>
              </div>   
              <div className="row con-form">
                <div className="col-md-12">
                  <input type="text" name="full-name" placeholder="Full Name" className="form-control"/>
                </div>
                <div className="col-md-12">
                  <input type="text" name="email" placeholder="Email Id" className="form-control"/>
                </div>
                <div className="col-md-12">
                  <input type="text" name="subject" placeholder="Subject" className="form-control"/>
                </div>
                <div className="col-md-12"><textarea name="" id=""></textarea></div>
                <div className="col-md-12 sub-but"><button className="btn btn-general btn-white" role="button">Send</button></div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-5"> 
              <div className="contact-cont2"> 
                <div className="contact-add contact-box-desc">
                  <h3><i className="fa fa-map-marker cl-atlantis fa-2x"></i> Address</h3>
                  <p>257 G4 Johar Town <br/>
                  Lahore, Pakistan <br/></p>
                </div>
                <div className="contact-phone contact-side-desc contact-box-desc">
                  <h3><i className="fa fa-phone cl-atlantis fa-2x"></i> Phone</h3>
                  <p>0314-4245930 <br/>0304-4080452</p>
                </div>
                <div className="contact-mail contact-side-desc contact-box-desc">
                  <h3><i className="fa fa-envelope-o cl-atlantis fa-2x"></i> Email</h3>
                <address className="address-details-f"> 
                  Email: <a href="mailto:info@themsbit.com" className="">zubairhasrat48@gmail.com</a>
                </address>
                <ul className="list-inline social-icon-f top-data">
                  <li><a href="#" target="_empty"><i className="fa top-social fa-facebook" style={{ color: "#4267b2", borderColor:"#4267b2" }}></i></a></li>
                  <li><a href="#" target="_empty"><i className="fa top-social fa-twitter" style={{ color: "#4AB3F4", borderColor:"#4AB3F4"}}></i></a></li>
                  <li><a href="#" target="_empty"><i className="fa top-social fa-google-plus" style={{color: "#e24343", borderColor:"#e24343"}}></i></a></li> 
                </ul>
                </div>
              </div>
            </div> 
          </div>
      </section>
    )
}

export default Contact;