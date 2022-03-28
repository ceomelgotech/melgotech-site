import React from 'react';

const Hero = () => {
  return (
    <>
        <section className="hero-area">
            <div className="main__circle"></div>
            <div className="main__circle2"></div>
            <div className="main__circle3"></div>
            <div className="main__circle4"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="hero-content">
                            <h1><span className="wow fadeInUp" data-wow-delay=".4s">Welcome to Melgotech</span>
                                <span className="wow fadeInUp" data-wow-delay=".8s">The Home</span>
                                <span className="wow fadeInUp" data-wow-delay="1.2s"><h3>Of Business</h3></span>
                                <span className="color2 wow fadeInUp" data-wow-delay="1.6s">Digitalization</span>
                            </h1>
                            <p>Improve your business marketing by 2x through your digital presence in the new evolution of business marketing and customer outreach.</p>
                            <div className="button">
                                <a href="/qoute" className="btn ">Get a qoute now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="app-image">
                            <div className="image-bg-shape"></div>
                            <img src="assets/images/hero/app.svg" alt="#" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero;