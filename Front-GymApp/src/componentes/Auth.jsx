import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


export const Auth = () => {
    const { user, logout } = useContext (AuthContext);
    
    if (user) {
        return (
            <p> 
    loged is as {user.name} <button onClick={() => logout}>logOut</button>
    
</p>
    );
} else {
    return (
        <div>
            <h2>Registrarse o Iniciar Sesión</h2>


            <ul className="nav">
            <li className="list-link">
                <Link to = "/register" id="r-link" className="link"> Register</Link>
            </li>
            <li className="list-link">
                <Link to = "/login"id="l-link" className="link">Login</Link>
        
            </li>
        </ul>
        </div>
        );
    }
};