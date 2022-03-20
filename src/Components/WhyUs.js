import React from 'react';

const WhyUs = () => {
  return (
    <>
        <section className="services section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3 className="wow zoomIn" data-wow-delay=".2s">Choosing Melgotech to handle your Service</h3>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">Why choose us<br /> Melgotech</h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">There are many various and crucial reasons as to why you should choose Melgotech to handle your services. Below are some of the reasons.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">

                        <div className="single-service one">
                            <div className="service-icon">
                                <i className="lni lni-thunder"></i>
                            </div>
                            <h3>Fast Service Delivery</h3>
                            <p>We provide your service in the shortest time period possible depending on project specs.</p>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">

                        <div className="single-service two">
                            <div className="service-icon">
                                <i className="lni lni-invest-monitor"></i>
                            </div>
                            <h3>Low Standard Costs</h3>
                            <p>We Provide our services at low standard costs that can help businesses easily engage with us.</p>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12  wow fadeInUp" data-wow-delay=".8s">

                        <div className="single-service three">
                            <div className="service-icon">
                                <i className="lni lni-invention"></i>
                            </div>
                            <h3>Standard Neat Designs</h3>
                            <p>Our Developers develop exquisite and elegant designs that compete with world class designs.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WhyUs;