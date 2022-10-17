import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <>
      {/* Start Top Header Area */}
      <div className="top-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <p>Envío GRATIS en 5 días a partir de $99 dólares</p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6">
              <div className="search-box">
                <form>
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Buscar"
                  />
                  <button type="submit">
                    <i className="bx bx-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <ul>
                <li>
                  <Link to="#" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank">
                    <i className="bx bxl-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank">
                    <i className="bx bxl-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Top Header Area */}

      {/* Start Navbar Area */}
      <div className="navbar-area">
        <div className="patoi-responsive-nav">
          <div className="container">
            <div className="patoi-responsive-menu">
              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="patoi-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" to="/">
                <img src={Logo} alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menu"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse mean-menu" id="menu">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      to="#"
                      className="dropdown-toggle nav-link"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Inicio
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li className="nav-item">
                        <Link
                          to="index.html"
                          className="nav-link dropdown-item"
                        >
                          Inicio Demo - Uno
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="index-2.html"
                          className="nav-link dropdown-item"
                        >
                          Inicio Demo - Dos
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="index-3.html"
                          className="nav-link dropdown-item"
                        >
                          Inicio Demo - Tres
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#"
                      className="dropdown-toggle nav-link"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Paginas
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li className="nav-item">
                        <Link
                          to="about.html"
                          className="nav-link dropdown-item"
                        >
                          Acerca de Nosotros
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="order-tracking.html"
                          className="nav-link dropdown-item"
                        >
                          Seguimiento de Pedido
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="profile-authentication.html"
                          className="nav-link dropdown-item"
                        >
                          Mi Cuenta
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="faq.html" className="nav-link dropdown-item">
                          FAQ
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="privacy-policy.html"
                          className="nav-link dropdown-item"
                        >
                          Política de Privacidad
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="terms-conditions.html"
                          className="nav-link dropdown-item"
                        >
                          Términos y Condiciones
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="not-found.html"
                          className="nav-link dropdown-item"
                        >
                          Página de Error 404
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#"
                      className="dropdown-toggle nav-link"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Tienda
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="shop-grid.html" className="nav-link">
                          Tienda de Cuadrícula
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="shop-left-sidebar.html" className="nav-link">
                          Barra lateral izquierda de la tienda
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="shop-right-sidebar.html" className="nav-link">
                          Barra lateral derecha de la tienda
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="products-details.html" className="nav-link">
                          Detalles de Producto
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="cart.html" className="nav-link">
                          Carrito
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="checkout.html" className="nav-link">
                          Pedido
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="wishlist.html" className="nav-link">
                          Lista de Deseos
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#"
                      className="dropdown-toggle nav-link"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Blog
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="blog-grid.html" className="nav-link">
                          Blog de Cuadricula
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="blog-left-sidebar.html" className="nav-link">
                          Barra lateral izquierda del blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="blog-right-sidebar.html" className="nav-link">
                          Barra lateral derecha del blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="blog-details.html" className="nav-link">
                          Detalles del blog
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="contact.html" className="nav-link">
                      Contacto
                    </Link>
                  </li>
                </ul>
                <div className="others-option">
                  <div className="d-flex align-items-center">
                    <ul>
                      <li>
                        <Link to="profile-authentication.html">
                          <i className="bx bx-user-circle"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="cart.html">
                          <i className="bx bx-cart"></i>
                        </Link>
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
                        <option selected>Ingles</option>
                        <option value="1">Español</option>
                        <option value="2">Chino</option>
                      </select>
                    </li>
                    <li>
                      <Link to="profile-authentication.html">
                        <i className="bx bx-user-circle"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="cart.html">
                        <i className="bx bx-cart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Navbar Area */}
    </>
  );
};
