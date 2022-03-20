import React from 'react';

const WhyChoose = () => {
  return (
    <>
        <section className="about section">
            <div className="shape-1">
                <img src="assets/images/about/shape1.svg" alt="#" />
            </div>
            <div className="shape-2">
                <img src="assets/images/about/shape2.svg" alt="#" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h4>Why Choose Us</h4>
                            <h2>We Provide Quality Digital Marketing Solutions</h2>
                            <p>There are many reasons as to why you should choose Melgotech to handle your company's Digital Logistics.</p>
                            <ul className="why-choose-list">
                                <li>
                                    <span className="number">1</span>
                                    <div className="list-content">
                                        <h3>Fast Service Delivery</h3>
                                        <p>We provide your service in the shortest time period possible depending on project specs.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="number">2</span>
                                    <div className="list-content">
                                        <h3>Low Standard Costs</h3>
                                        <p>We Provide our services at low standard costs that can help businesses easily engage with us.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="number">3</span>
                                    <div className="list-content">
                                        <h3>Standard Neat Designs</h3>
                                        <p>Our Developers develop exquisite and elegant designs that compete with world class designs.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <img src="assets/images/why-choose/why-choose.png" alt="#" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WhyChoose;