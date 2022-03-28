import React from 'react';

const ContactForm = () => {
  return (
    <>
        <div className="contact-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="contact-form">
                            <form className="form" method="post" action="assets/mail/mail.php">
                                <div className="form-group">
                                    <label>Your name</label>
                                    <input name="name" type="text" placeholder="Tinevimbo Marumani" required="required" />
                                </div>
                                <div className="form-group">
                                    <label>Your Subject</label>
                                    <input name="subject" type="text" placeholder="Type your subject" required="required" />
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input name="email" type="email" placeholder="melgotech@gmail.com" required="required" />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea placeholder="Write your message here" name="message" id="message-area" className="form-control"></textarea>
                                </div>
                                <div className="button">
                                    <button type="submit" className="btn ">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="contact-widget-wrapper">
                            <div className="main-title">
                                <h2>We are always open<br/> for help you.
                                </h2>
                                <p>Feel free to contact us on any of the below platforms. We can answer your calls upto 12am        </p>
                            </div>
                            <div className="contact-widget-block">
                                <h3 className="title">Call us</h3>
                                <p><i class="lni lni-phone-set"></i> +263-78-2813-478</p>
                                <p><i class="lni lni-phone-set"></i> +263-78-6395-162</p>
                            </div>
                            <div className="contact-widget-block">
                                <h3 className="title">Email us</h3>
                                <p><i class="lni lni-inbox"></i> <a href="/cdn-cgi/l/email-protection" className="__cf_email__" >melgotech@gmail.com</a></p>
                                <p><i class="lni lni-inbox"></i> <a href="/cdn-cgi/l/email-protection" className="__cf_email__" >marumanitinevimbo@gmail.com</a></p>
                            </div>
                            <div className="contact-widget-block">
                                <h3 className="title">Our Offices</h3>
                                <p><i class="lni lni-map"></i> Harare</p>
                                <p><i class="lni lni-map"></i> Chiredzi</p>
                                <p><i class="lni lni-map"></i> Zvishavane</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactForm;