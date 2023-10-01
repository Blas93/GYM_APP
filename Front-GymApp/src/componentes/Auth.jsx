import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { LoginPage } from "../pages/LoginPage";
export const Auth = () => {
    const { user, logout } = useContext (AuthContext);
    
    return user ?(
<p> 
    loged is as {user.name} <button onClick={() => logout}>logOut</button>
    <LoginPage LoginPage={LoginPage}/>
    
</p>
    ):( 
        <ul className="nav">
            <li className="list-link">
                <Link to = "/register" id="r-link" className="link"> Register</Link>
            </li>
            <li className="list-link">
                <Link to = "/login"id="l-link" className="link">Login</Link>
            </li>
        </ul>
    );
    
};