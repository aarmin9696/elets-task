import React from 'react';

const Contact = () => {
  return (
    <div className="lv_click_wrapper">
      <div id="contact" className="lv_sponsors_wrapper lv_toppadder100 lv_bottompadder100">
        <div className="container">
          <div className="row">
            <div className="col-lg-offset-2 col-md-offset-2">
              <div className="lv_heading_center">
                <h2>Contact</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 wow slideInUp text-center" data-wow-delay="0.3s">
              <div className="cont bg-light">
                <h3>For Partnership and Speaking Opportunities (Corporate)</h3>
                <h4 className="text-primary">Shivam Pathania</h4>
                <div className="d-flex">
                  <i className="bi bi-telephone text-success me-2"></i>
                  <p className="text-center mb-1">
                    <img src="https://nbfc100.eletsonline.com/images/header/call_icon.png" alt="Mail Icon" title="Mail Icon" />&nbsp; +91 9560042405
                  </p>
                </div>
                <div className="d-flex">
                  <i className="bi bi-envelope-open text-success me-2"></i>
                  <p className="text-center">
                    <img src="https://nbfc100.eletsonline.com/images/header/mail_icon.png" alt="Mail Icon" title="Mail Icon" />&nbsp; banking@eletsonline.com
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-center wow slideInUp" data-wow-delay="0.6s">
              <div className="cont bg-light">
                <h3>For Speaking Opportunities</h3>
                <h4 className="text-primary">Shivani Singh</h4>
                <div className="d-flex text-center">
                  <i className="bi bi-telephone text-success me-2"></i>
                  <p className=" text-center mb-1">
                    <img src="https://nbfc100.eletsonline.com/images/header/call_icon.png" alt="Mail Icon" title="Mail Icon" />&nbsp; +91 8527697687
                  </p>
                </div>
                <div className="d-flex">
                  <i className="bi bi-envelope-open text-success me-2"></i>
                  <p className="text-center">
                    <img src="https://nbfc100.eletsonline.com/images/header/mail_icon.png" alt="Mail Icon" title="Mail Icon" />&nbsp; bfsi@elets.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="venue" className="lv_map_wrapper">
        <div className="venue-div">
          <img src="https://nbfc100.eletsonline.com/images/venue.webp" alt="" width="100%" className="img-fluid" />
          <div className="venue-inner">
            <img src="./images/pointer.png" width="40px" className="img-point" alt="" />
            <h3 className="mb-0 text-white"><b>Venue:</b></h3>
            <h2><span className="orange">ITC Maratha</span></h2>
            <p><b>Address :</b> Sahara Airport Road, Near International Airport,<br /> Andheri (East), Mumbai, Maharashtra, India,<br /> 400099</p>
          </div>
          <div className="venue-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0833979293034!2d72.86715767521066!3d19.10399695109294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8412ee59705%3A0xed4f05c5b81f25df!2sItc%20Maratha%2C%20Ashok%20Nagar%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400059!5e0!3m2!1sen!2sin!4v1696997046159!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
