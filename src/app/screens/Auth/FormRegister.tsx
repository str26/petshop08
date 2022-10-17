import React from "react";

export const FormRegister = () => {
  return (
    <>
      <div className="register-form">
        <h2>Registrar</h2>
        <form>
          <div className="form-group">
            <label>Nombre de Usuario</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de Usuario"
            />
          </div>
          <div className="form-group">
            <label>Correo Electronico</label>
            <input type="email" className="form-control" placeholder="Correo Electronico" />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
            />
          </div>
          <div className="form-group">
            <label>Repetir Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Repetir Contraseña"
            />
          </div>
          <p className="description">
            La contraseña debe tener al menos ocho caracteres. Para hacerla más
            fuerte, utilice letras mayúsculas y minúsculas, números y símbolos
            ¡como ! " ? $ % ^ & )
          </p>
          <button type="submit">Registrar</button>
        </form>
      </div>
    </>
  );
};
