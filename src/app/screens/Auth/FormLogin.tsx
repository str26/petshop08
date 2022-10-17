import React from "react";

export const FormLogin = () => {
  return (
    <>
      <div className="login-form">
        <h2>Inicio de Sesión</h2>
        <form>
          <div className="form-group">
            <label>Nombre de usuario o correo electrónico</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de usuario o correo electrónico"
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
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
                  Recordar
                </label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 lost-your-password-wrap">
              <a
                className="lost-your-password"
                data-bs-toggle="modal"
                data-bs-target="#forgotPassword"
              >
                ¿Has perdido tu contraseña?
              </a>
            </div>
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>

      {/* inicio del modal para olvidar contraseña */}

      <div
        className="modal fade"
        id="forgotPassword"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ingresa tu correo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary">
                Recuperar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
