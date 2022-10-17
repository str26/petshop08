import React from "react";
import { Link } from "react-router-dom";

import Error from "../../../assets/img/error.png";

export const PageDoesntExist = () => {
  return (
    <>
      <div className="not-found-area ptb-100">
        <div className="container">
          <div className="not-found-content">
            <img src={Error} alt="error-image" />
            <h3>La página no existe</h3>
            <p>
              Es posible que la página que busca haya sido eliminada, haya
              cambiado de nombre o no esté disponible temporalmente.
            </p>
            <Link to="/" className="default-btn">
              <span>Volver a la página de inicio</span>
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
};
