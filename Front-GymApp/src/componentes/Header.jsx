import { Link } from "react-router-dom"; 


<logo />
export const Header = () => {
    return (
        <header>
            
            <div className="logo">
                <a href ="/" className="logo-img">
                    <img src="logo.png" alt="Logo de la aplicación"/>
                </a>  
            <h2 className="logo-nombre">
            <Link to ="/">
                    Gym App
            </Link>
            </h2>
            </div>
           
            
            <nav>
            <ul className="nav">
            <li className="list-link">
                <Link to = "/register" id="r-link" className="link"> Register</Link>
            </li>
            <li className="list-link">
                <Link to = "/login"id="l-link" className="link">Login</Link>
        
            </li>
        </ul>
            </nav>
        </header>
    )
}