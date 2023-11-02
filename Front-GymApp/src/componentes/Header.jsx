import { Link } from "react-router-dom"; 
import '../Css/Header.css';

<logo />
export const Header = () => {
    return (
        <header>
                <a  className="logo-img">
                    <img href="logo/logogymapp.png" alt="Logo de la aplicación"/>
                </a>  
            <h2 className="logo-nombre">
            <Link to ="/">
                    Gym App
            </Link>
            </h2>
        
           
            
            <nav>
            <ul className="nav">
            <li className="list-link">
                <Link to = "/register" id="r-link" className="link-r"> Register</Link>
            </li>
            <li className="list-link">
                <Link to = "/login"id="l-link" className="link-l">Login</Link>
        
            </li>
        </ul>
            </nav>
        </header>
    )
}