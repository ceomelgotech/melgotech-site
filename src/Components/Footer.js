import React from 'react';

const Footer = () => {
     const navstyle={
        width:"250px"
    }
  return (
    <>
        <footer className="footer section">

            <div className="footer-top">
                <div className="container">
                    <div className="inner-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">

                                <div className="single-footer f-about">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img style={navstyle}src="assets/images/logo/logo.svg" alt="#" />
                                        </a>
                                    </div>
                                    <p>Melgotech Incorporated is a Zimbabwean based company that deals with software development, web design, graphics design and also deals with ICDL training being its main aspect pioneering in African Digitalisation.</p>
                                    <p className="copyright-text"><span>© 2022  Melgotech.</span>Designed and Developed by <a href="/" rel="noreferrer" target="_blank">Melgotech Incoroporated</a>
                                    </p>
                                </div>

                            </div>
                            <div className="col-lg-2 col-md-6 col-12">

                                <div className="single-footer f-link">
                                    <h3>Solutions</h3>
                                    <ul>
                                        <li><a href="/">Website Design and Development</a></li>
                                        <li><a href="/">Software Development</a></li>
                                        <li><a href="/">Graphics Design</a></li>
                                        <li><a href="/">Trip Advisor</a></li>
                                        <li><a href="/">ICDL Training</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-2 col-md-6 col-12">

                                <div className="single-footer f-link">
                                    <h3>Support</h3>
                                    <ul>
                                        <li><a href="/pricing">Pricing</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                        <li><a href="/quote">Get a Quote</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 col-12">

                                <div className="single-footer newsletter">
                                    <h3>Subscribe</h3>
                                    <p>Subscribe to our newsletter for the latest updates</p>
                                    <form action="#" method="get" target="_blank" className="newsletter-form">
                                        <input name="EMAIL" placeholder="Email address" required="required" type="email" />
                                        <div className="button">
                                            <button className="sub-btn"><i className="lni lni-envelope"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    </>
  )
}

export default Footer;
