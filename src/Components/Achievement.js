import React from 'react';

const Achievement = () => {
  return (
    <>
        <section className="achievement section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Our achievements </h2>
                            <p>Melgotech has got some outstanding portfolio with quite astounding accomplishments.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="single-achievement align-center wow fadeInUp" data-wow-delay=".2s">
                                    <h3 className="counter">
                                        <svg className="shape" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M47.1868 15.7745C42.7476 11.5909 36.9073 9.25816 30.9507 9.28958C24.9941 9.32099 19.4092 11.714 15.4245 15.942C11.4399 20.1701 9.38191 25.887 9.70335 31.835C10.0248 37.783 12.6993 43.4748 17.1386 47.6585L32.1627 31.7165L47.1868 15.7745Z" fill="#FF4E79" />
                                        </svg>
                                        <span id="secondo1" className="countup" cup-end="100">100</span>%
                                    </h3>
                                    <p>Satisfaction</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="single-achievement align-center wow fadeInUp" data-wow-delay=".4s">
                                    <h3 className="counter">
                                        <svg className="shape" width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M34.2973 10.7613C30.436 7.90726 25.6931 6.5768 21.1119 7.06265C16.5308 7.54849 12.4866 9.81085 9.86915 13.352C7.25169 16.8932 6.27532 21.4231 7.15483 25.9452C8.03433 30.4673 10.6977 34.6112 14.559 37.4653L24.4281 24.1133L34.2973 10.7613Z" fill="#FE8432" fill-opacity="0.83" />
                                        </svg>
                                        <span id="secondo2" className="countup" cup-end="120">15</span>
                                    </h3>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="single-achievement align-center wow fadeInUp" data-wow-delay=".6s">
                                    <h3 className="counter">
                                        <svg className="shape" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M47.1868 15.7745C42.7476 11.5909 36.9073 9.25816 30.9507 9.28958C24.9941 9.32099 19.4092 11.714 15.4245 15.942C11.4399 20.1701 9.38191 25.887 9.70335 31.835C10.0248 37.783 12.6993 43.4748 17.1386 47.6585L32.1627 31.7165L47.1868 15.7745Z" fill="#B998FF" />
                                        </svg>
                                        <span id="secondo3" className="countup" cup-end="500">15</span>+
                                    </h3>
                                    <p>Projects Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Achievement; 
