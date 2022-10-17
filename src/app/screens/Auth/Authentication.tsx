import React from "react";

import { TitleArea } from "../../components/TitleArea";
import { FormLogin } from "./FormLogin";
import { FormRegister } from "./FormRegister";

export const Authentication = () => {
  return (
    <>
      <TitleArea />
      <div className="profile-authentication-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <FormLogin />
            </div>

            <div className="col-lg-6 col-md-12">
              <FormRegister />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


