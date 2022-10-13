import React from "react";

export const FormLogin = () => {
  return (
    <>
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Username or email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username or email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 remember-me-wrap">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember-me"
                />
                <label className="form-check-label" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 lost-your-password-wrap">
              <a href="#" className="lost-your-password">
                Lost your password?
              </a>
            </div>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};
