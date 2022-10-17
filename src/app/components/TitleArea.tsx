import React from "react";
import { Link } from "react-router-dom";

export const TitleArea = () => {
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>Title Here</h1>
            <ul>
              <li>
                <Link to="/">Pagina Principal</Link>
              </li>
              <li>Title Here</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
