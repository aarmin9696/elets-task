import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome CSS
import introPic from "../images/introPic.jpeg"


const Intro = () => {
    return (
        <div id="about" className="lv_click_wrapper">
            <div className="lv_about_wrapper lv_bottompadder100">
                <div className="liner">
                    <h2 style={{color:'black', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif' }}>
                        India's Premier NBFCs Congregation - <span style={{ color: '#E72426' }}>Empowering Innovations</span>
                    </h2>
                </div>
                <div className="container mt-5">
                    <div className="row cstm5">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 lv_toppadder50">
                            <div className="lv_heading_left mb-5">
                                <h2 style={{ fontSize: '36px' }}>Theme - Advancing the Digital Disruption in NBFCs</h2>
                            </div>
                            <div className="lv_about_info">
                                <p>In today's fast-paced and ever-evolving financial landscape, digital disruptions have
                                    become the driving force behind innovation and growth. The Elets NBFC100 Tech Summit
                                    aims to be at the forefront of this revolution, bringing together industry stalwarts,
                                    thought leaders, technology pioneers, and policy influencers for a day of insightful
                                    discussions, networking, and idea exchange. <br /><br />

                                    Elets Technomedia and The Banking &amp; Finance Post are coming up with the 15th edition of
                                    Elets NBFC100 Tech Summit, India’s longest-running NBFC Congregation. The summit themed
                                    around, “Advancing the Digital Disruptions in NBFCs," promises to be an enlightening and
                                    transformative experience of the NBFC sector.
                                </p>
                                <p><i style={{ fontSize: '24px', paddingRight: '10px' }} className="fa fa-calendar"></i> 11th October, 2023</p>
                                <p><i style={{ fontSize: '24px', paddingRight: '10px' }} className="fa fa-map-marker"></i> ITC Maratha, Mumbai</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 lv_toppadder50">
                            <img src={introPic} style={{ maxWidth: '100%', borderRadius: '10px' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
