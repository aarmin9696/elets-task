import React from 'react';

const Who = () => {
  return (
    <div className="lv_video_wrapper lv_toppadder100 lv_bottompadder100">
      <div className="lv_img_overlay"></div>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.76)', padding: '30px' }} className="container">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <div className="lv_heading_left">
                <h2 className="text-white">Who Should Attend?</h2>
              </div>
              <p className="who-p"><i className="fa fa-arrow-right"></i>&nbsp;&nbsp;Decision Makers - Government &amp; Regulatory Bodies</p>
              <p className="who-p"><i className="fa fa-arrow-right"></i>&nbsp;&nbsp;MD, CEO, CIO, CTO and CXOs from NBFCs, MFIs, and HFCs</p>
              <p className="who-p"><i className="fa fa-arrow-right"></i>&nbsp;&nbsp;Technology/Solution Providers</p>
              <p className="who-p"><i className="fa fa-arrow-right"></i>&nbsp;&nbsp;NBFCs &amp; MFIs Associations</p>
              <p className="who-p"><i className="fa fa-arrow-right"></i>&nbsp;&nbsp;NBFC Domain Experts</p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="https://nbfc100.eletsonline.com/images/who.png" width="100%" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
