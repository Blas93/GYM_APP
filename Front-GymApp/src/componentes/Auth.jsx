import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const Auth = () => {
    const { user, logout } = useContext (AuthContext);
    return user ?(
<p> 
    loged is as {user.name} <button onClick={() => logout}>logOut</button>
</p>
    ):( 
        <ul>
            <li>
                <Link to = "/register"> Register</Link>
            </li>
            <li>
                <Link to = "/login">Login</Link>
            </li>
        </ul>
    );
    
};