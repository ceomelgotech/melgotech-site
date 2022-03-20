import React from 'react';

const About = () => {
  return (
    <>
        <section className="about section">
            <div className="shape-1">
                <img src="assets/images/about/shape1.svg" alt="#" />
            </div>
            <div className="shape-2">
                <img src="assets/images/about/shape2.svg" alt="#" / >
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h4 className="wow fadeInUp" data-wow-delay=".2s">Get an insight of Melgotech.</h4>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">A Brief info on Melgotech</h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">Melgotech Incorporated is a Company based in Zimbabwe and has the main objective of helping the Zimbabweans Learn the technological side of this world and also help Market companies on the internet as it is the new trend.
                            </p>
                            <p className="wow fadeInUp" data-wow-delay=".6s">
                                Melgotech is a company that has been established by two young tech ethusiasts mainly with the goal of helping  the increase of Zimbabwean computer literacy percentage and also increasing the digital marketing of companies as most activities now take place on the web thus need has been taken account of by the two entreprenuers Tinevimbo Godfrey Marumani and Clinton Tanatswa Dhlamini. The main company vision being the need to "help digitalise the world at low cost". The values for the company are:
                            </p>
                            <div className="action-button wow fadeInUp" data-wow-delay=".8s">
                                <div className="btn-icon">
                                    <i className="lni lni-bolt"></i>
                                </div>
                                <h4>Hardwork</h4>
                            </div>
                            <div className="action-button wow fadeInUp" data-wow-delay=".8s">
                                <div className="btn-icon">
                                    <i className="lni lni-bolt"></i>
                                </div>
                                <h4>Teamwork</h4>
                            </div>
                            <div className="action-button wow fadeInUp" data-wow-delay=".8s">
                                <div className="btn-icon">
                                    <i className="lni lni-bolt"></i>
                                </div>
                                <h4>Persistence</h4>
                            </div>
                            <div className="action-button wow fadeInUp" data-wow-delay=".8s">
                                <div className="btn-icon">
                                    <i className="lni lni-bolt"></i>
                                </div>
                                <h4>Integrity</h4>
                            </div>
                            <div className="action-button wow fadeInUp" data-wow-delay=".8s">
                                <div className="btn-icon">
                                    <i className="lni lni-bolt"></i>
                                </div>
                                <h4>Goal Oriented</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 wow fadeInRight" data-wow-delay=".4s">
                        <img style={{borderRadius: "25px"}}src="assets/images/about/about.png" alt="#" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About;
