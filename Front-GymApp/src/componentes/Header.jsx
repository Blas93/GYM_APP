import { Link } from "react-router-dom"; 
import '../Css/Header.css';

<logo />
export const Header = () => {
    return (
        <header>

                

                <div className="logo-img">
            <img href="../descarga.jpeg" alt="Logo de la aplicación"/>
                </div>  


            <h2 className="logo-nombre">
            <Link to ="/">
                    Gym App
            </Link>
            </h2>
        
           
            
            <nav>
            <ul className="nav">
            <li className="list-link">
                <Link to = "/register" id="r-link" className="link-r"> Registro</Link>
            </li>
            <li className="list-link">
                <Link to = "/login"id="l-link" className="link-l">Acceso</Link>
        
            </li>
        </ul>
            </nav>
        </header>
    )
}