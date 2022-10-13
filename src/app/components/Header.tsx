import React from "react";

import Logo from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <>
    <div className="top-header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <p>FREE 5 days shipping over $99</p>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6">
                        <div className="search-box">
                            <form>
                                <input type="text" className="input-search" placeholder="Enter your keywords..."/>
                                <button type="submit"><i className='bx bx-search'></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <ul>
                            <li><a href="#" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                            <li><a href="#" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                            <li><a href="#" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                            <li><a href="#" target="_blank"><i className='bx bxl-youtube'></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      <div className="navbar-area">
        <div className="patoi-responsive-nav">
          <div className="container">
            <div className="patoi-responsive-menu">
              <div className="logo">
                <a href="index.html">
                  <img src={Logo} alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="patoi-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
                <img src={Logo} alt="logo" />
              </a>
              <div className="collapse navbar-collapse mean-menu">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Home
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link">
                          Home Demo - One
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-2.html" className="nav-link">
                          Home Demo - Two
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-3.html" className="nav-link">
                          Home Demo - Three
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link active">
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="about.html" className="nav-link">
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="order-tracking.html" className="nav-link">
                          Order Tracking
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="profile-authentication.html"
                          className="nav-link active"
                        >
                          My Account
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="faq.html" className="nav-link">
                          FAQ
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="privacy-policy.html" className="nav-link">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="terms-conditions.html" className="nav-link">
                          Terms & Conditions
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="not-found.html" className="nav-link">
                          404 Error Page
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Shop
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="shop-grid.html" className="nav-link">
                          Shop Grid
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="shop-left-sidebar.html" className="nav-link">
                          Shop Left Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="shop-right-sidebar.html" className="nav-link">
                          Shop Right Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="products-details.html" className="nav-link">
                          Products Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="cart.html" className="nav-link">
                          Cart
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="checkout.html" className="nav-link">
                          Checkout
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="wishlist.html" className="nav-link">
                          Wishlist
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog-grid.html" className="nav-link">
                          Blog Grid
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-left-sidebar.html" className="nav-link">
                          Blog Left Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-right-sidebar.html" className="nav-link">
                          Blog Right Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-details.html" className="nav-link">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="others-option">
                  <div className="d-flex align-items-center">
                    <ul>
                      <li>
                        <select className="form-select">
                          <option selected>English</option>
                          <option value="1">Spanish</option>
                          <option value="2">Chinese</option>
                        </select>
                      </li>
                      <li>
                        <a href="profile-authentication.html">
                          <i className="bx bx-user-circle"></i>
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <i className="bx bx-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu">
              <div className="inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>
            <div className="container">
              <div className="option-inner">
                <div className="others-option">
                  <ul>
                    <li>
                      <select className="form-select">
                        <option selected>English</option>
                        <option value="1">Spanish</option>
                        <option value="2">Chinese</option>
                      </select>
                    </li>
                    <li>
                      <a href="profile-authentication.html">
                        <i className="bx bx-user-circle"></i>
                      </a>
                    </li>
                    <li>
                      <a href="cart.html">
                        <i className="bx bx-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
