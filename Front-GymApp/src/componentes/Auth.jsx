import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        // Si hay un usuario autenticado, mostrar información y botón de logout
        <p>
          Logged in as {user.name} <button onClick={() => logout()}>Logout</button>
        </p>
      ) : (
        // Si no hay un usuario autenticado, mostrar enlaces de registro e inicio de sesión
        <div>
          <h2>Registrarse o Iniciar Sesión</h2>
          <ul className="nav">
            <li className="list-link">
              <Link to="/register" id="r-link" className="register-link">
                Register
              </Link>
            </li>
            <li className="list-link">
              <Link to="/login" id="l-link" className="login-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Auth;
