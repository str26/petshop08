import React from 'react'

import whiteLogo from "../../assets/img/white-logo.png"
import visa from "../../assets/img/payment/visa.png"
import mc from "../../assets/img/payment/mc.png"
import paypal from "../../assets/img/payment/paypal.png"
import ae from "../../assets/img/payment/ae.png"
import discover from "../../assets/img/payment/discover.png"


export const Footer = () => {
  return (
    <>
    <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <a href="index.html" className="logo">
                                <img src={whiteLogo} alt="logo"/>
                            </a>
                            <ul className="footer-contact-info">
                                <li><span>Hotline:</span> <a href="tel:12855">12855</a></li>
                                <li><span>Tech support:</span> <a href="tel:+1514312-5678">+1 (514) 312-000-000</a></li>
                                <li><span>Email:</span> <a href="mailto:hello@patoi.com">hello@patoi.com</a></li>
                                <li><span>Address:</span> 1523 Cook Hill Road New Haven, CT</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-4">
                            <h3>Information</h3>
                            <ul className="custom-links">
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="terms-conditions.html">Terms & Conditions</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="privacy-policy.html">Refund Policy</a></li>
                                <li><a href="terms-conditions.html">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Customer service</h3>
                            <ul className="custom-links">
                                <li><a href="profile-authentication.html">My Account</a></li>
                                <li><a href="faq.html">FAQ's</a></li>
                                <li><a href="cart.html">Order History</a></li>
                                <li><a href="wishlist.html">Wishlist</a></li>
                                <li><a href="terms-conditions.html">Delivery Information</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Subscribe to our newsletter!</h3>
                            <p>Sign up for our mailing list to get the latest updates news & offers.</p>
                            <form className="newsletter-form" data-toggle="validator">
                                <input type="email" className="input-newsletter" placeholder="Your email address" name="EMAIL" required autoComplete="off"/>
                                <button type="submit"><i className='bx bx-paper-plane'></i></button>
                                <div id="validator-newsletter" className="form-result"></div>
                            </form>
                            <div className="payment-types">
                                <div className="d-flex align-items-center">
                                    <span>We accept:</span>
                                    <ul>
                                        <li><img src={visa} alt="visa"/></li>
                                        <li><img src={mc} alt="master-card"/></li>
                                        <li><img src={paypal} alt="paypal"/></li>
                                        <li><img src={ae} alt="american-express"/></li>
                                        <li><img src={discover} alt="discover"/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <p>Copyright @2021 <span>Patoi</span>. Design & Developed by <a href="https://envytheme.com/">EnvyTheme</a></p>
                </div>
            </div>
        </footer>
    </>
  )
}
