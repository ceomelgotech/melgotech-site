import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
     const navstyle={
        width:"250px"
    }
  return (
    <>
        <header className="header navbar-area others-pages">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="nav-inner">

                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="/">
                                    <img style={navstyle}src="assets/images/logo/logo.svg" alt="Logo" />
                                </a>
                                <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <Link to="/" aria-label="Toggle navigation">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about" aria-label="Toggle navigation">About Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/services" aria-label="Toggle navigation">Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/pricing" aria-label="Toggle navigation">Pricing</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/contact" aria-label="Toggle navigation">Contact Us</Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div className="button">
                                    <a href="/quote" className="signup">Get A Quote</a>
                                </div>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar;
